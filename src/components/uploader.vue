<template>
    <form id="uploader" ref="uploader" enctype="multipart/form-data" @submit="$event.preventDefault()">
      <label for="file">Image</label>
      <input name="file" type="file" id="file_picker" ref="filePicker" :multiple="multiple === true || null" @change="getLocalFiles($event.target.files)">
      <br>
      <span @click="doClick()" id="icon">Parcourir</span>
      <!-- <button id="btn">upload</button> -->
    </form>
</template>
<script>

import axios from "axios";

export default {
    data() {
      return {
           files: [],
           axiosConfig: {
              onUploadProgress: progressEvent => {
               let loaded = Math.floor((progressEvent.loaded * 100) / progressEvent.total);
               console.log(loaded);
              }
           }
      }
       
    },

    methods: {
        doClick() {
            this.$refs.filePicker.click();
        },
        checkFilesExtensions([...files]) {
            var errors = 0;
            const log = [];

            files.forEach(file => {
                console.log(file);
                if (!this.mimes.includes(file.type)) {
                    errors += 1;
                    if (!log.includes(file.type)) {
                        log.push(file.type);
                    }
                }
            });

            return {
                errors: errors !== 0,
                log: log
            }

        },
        getLocalFiles(files) {
            const check = this.checkFilesExtensions(files);

            if (!check.errors) {
                this.files = files;
                const fd = new FormData();

                Array.from(files).forEach(f => {
                    fd.append("uploader", f, f.name);
                });

                axios
                .post(this.$backEndURL + "upload/", fd, this.axiosConfig)
                .then(result => {
                    console.log(result);
                })
                .catch(err => {
                    console.error(err);
                });
            } else {
                console.error("file-type not allowed >", check.log);
            }
        }
    },

    props: ["mimes", "multiple"]
};
</script>

<style>
#file_picker {
    display: none;
}
</style>

