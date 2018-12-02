-- phpMyAdmin SQL Dump
-- version 4.7.9
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le :  Dim 02 déc. 2018 à 18:18
-- Version du serveur :  5.7.21
-- Version de PHP :  7.0.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `tshirts`
--

-- --------------------------------------------------------

--
-- Structure de la table `brand`
--

DROP TABLE IF EXISTS `brand`;
CREATE TABLE IF NOT EXISTS `brand` (
  `id` smallint(5) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(15) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `brand`
--

INSERT INTO `brand` (`id`, `name`) VALUES
(1, 'puma'),
(2, 'fila'),
(3, 'obey'),
(4, 'lacoste'),
(5, 'vans'),
(7, 'Blioni'),
(8, '');

-- --------------------------------------------------------

--
-- Structure de la table `product`
--

DROP TABLE IF EXISTS `product`;
CREATE TABLE IF NOT EXISTS `product` (
  `id` smallint(5) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(30) NOT NULL,
  `price` smallint(5) UNSIGNED NOT NULL,
  `url_img` varchar(150) DEFAULT NULL,
  `id_brand` smallint(6) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_brand` (`id_brand`)
) ENGINE=MyISAM AUTO_INCREMENT=31 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `product`
--

INSERT INTO `product` (`id`, `name`, `price`, `url_img`, `id_brand`) VALUES
(2, 'harold hunter', 32, 'fila1.jpg', 2),
(1, 'college skull', 20, 'puma2.jpg', 1),
(3, 'consume', 20, 'fila2.jpg', 2),
(4, 'skateboard lover', 10, 'puma.jpg', 1),
(5, 'cbgb skull', 20, 'obey.jpg', 3),
(6, 'chemical', 35, 'lacoste.jpg', 4),
(7, 'Super Boo', 40, 'puma3.jpg', 1),
(8, 'classic green', 29, 'vans.jpg', 5),
(9, 'Motor maniacs', 33, 'vans2.jpg', 5),
(28, 'Tswagg', 39, NULL, 4),
(29, 'Tendance', 31, NULL, 4),
(27, 'Nouveau model', 19, NULL, 2);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
