-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 07-03-2020 a las 19:33:50
-- Versión del servidor: 10.4.10-MariaDB
-- Versión de PHP: 7.3.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `rubrica`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `docentes`
--

DROP TABLE IF EXISTS `docentes`;
CREATE TABLE IF NOT EXISTS `docentes` (
  `id_docente` int(11) NOT NULL AUTO_INCREMENT,
  `id_login` int(11) NOT NULL,
  `nombre_evaluador` varchar(200) COLLATE utf8_spanish_ci NOT NULL,
  `institucion` varchar(200) COLLATE utf8_spanish_ci NOT NULL,
  `telefono` varchar(11) COLLATE utf8_spanish_ci NOT NULL,
  PRIMARY KEY (`id_docente`),
  UNIQUE KEY `id_login` (`id_login`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `docentes`
--

INSERT INTO `docentes` (`id_docente`, `id_login`, `nombre_evaluador`, `institucion`, `telefono`) VALUES
(20, 2, 'elias', 'sinu', '123213');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `evaluaciones`
--

DROP TABLE IF EXISTS `evaluaciones`;
CREATE TABLE IF NOT EXISTS `evaluaciones` (
  `id_evaluacion` int(11) NOT NULL AUTO_INCREMENT,
  `titulo_uno` varchar(200) COLLATE utf8_spanish_ci NOT NULL,
  `titulo_dos` varchar(200) COLLATE utf8_spanish_ci NOT NULL,
  `introduccion_uno` varchar(200) COLLATE utf8_spanish_ci NOT NULL,
  `introduccion_dos` varchar(200) COLLATE utf8_spanish_ci NOT NULL,
  `justificacion_uno` varchar(200) COLLATE utf8_spanish_ci NOT NULL,
  `justificacion_dos` varchar(200) COLLATE utf8_spanish_ci NOT NULL,
  `descripcion_uno` varchar(200) COLLATE utf8_spanish_ci NOT NULL,
  `descripcion_dos` varchar(200) COLLATE utf8_spanish_ci NOT NULL,
  `objetivo_general` varchar(200) COLLATE utf8_spanish_ci NOT NULL,
  `objetivo_especifico` varchar(200) COLLATE utf8_spanish_ci NOT NULL,
  `marco_referencial_uno` varchar(200) COLLATE utf8_spanish_ci NOT NULL,
  `marco_referencial_dos` varchar(200) COLLATE utf8_spanish_ci NOT NULL,
  `metodologia_uno` varchar(200) COLLATE utf8_spanish_ci NOT NULL,
  `metodologia_dos` varchar(200) COLLATE utf8_spanish_ci NOT NULL,
  `resultado_uno` varchar(200) COLLATE utf8_spanish_ci NOT NULL,
  `resultado_dos` varchar(200) COLLATE utf8_spanish_ci NOT NULL,
  `conclusion_uno` varchar(200) COLLATE utf8_spanish_ci NOT NULL,
  `conclusion_dos` varchar(200) COLLATE utf8_spanish_ci NOT NULL,
  `bibliografia_uno` varchar(200) COLLATE utf8_spanish_ci NOT NULL,
  `bibliografia_dos` varchar(200) COLLATE utf8_spanish_ci NOT NULL,
  `presentacion_uno` varchar(200) COLLATE utf8_spanish_ci NOT NULL,
  `presentacion_dos` varchar(200) COLLATE utf8_spanish_ci NOT NULL,
  `id_proyecto` int(11) NOT NULL,
  PRIMARY KEY (`id_evaluacion`),
  UNIQUE KEY `id_proyecto` (`id_proyecto`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `evaluaciones`
--

INSERT INTO `evaluaciones` (`id_evaluacion`, `titulo_uno`, `titulo_dos`, `introduccion_uno`, `introduccion_dos`, `justificacion_uno`, `justificacion_dos`, `descripcion_uno`, `descripcion_dos`, `objetivo_general`, `objetivo_especifico`, `marco_referencial_uno`, `marco_referencial_dos`, `metodologia_uno`, `metodologia_dos`, `resultado_uno`, `resultado_dos`, `conclusion_uno`, `conclusion_dos`, `bibliografia_uno`, `bibliografia_dos`, `presentacion_uno`, `presentacion_dos`, `id_proyecto`) VALUES
(29, 'Aceptable', 'Aceptable', 'Excelente', 'Excelente', 'Aceptable', 'Excelente', 'Excelente', 'Excelente', 'Excelente', 'Excelente', 'Excelente', 'Excelente', 'Excelente', 'Excelente', 'Excelente', 'Excelente', 'Excelente', 'Excelente', 'Excelente', 'Excelente', 'Aceptable', 'Excelente', 39);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `proyectos`
--

DROP TABLE IF EXISTS `proyectos`;
CREATE TABLE IF NOT EXISTS `proyectos` (
  `id_proyecto` int(11) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `nombre_ponente_uno` varchar(200) COLLATE utf8_spanish_ci NOT NULL,
  `nombre_ponente_dos` varchar(200) COLLATE utf8_spanish_ci NOT NULL,
  `tipo_proyecto` set('investigacion','innovacion y/o desarrollo') COLLATE utf8_spanish_ci NOT NULL,
  `subtipo_proyecto` set('propuesta','en curso','terminada') COLLATE utf8_spanish_ci NOT NULL,
  `id_docente` int(11) NOT NULL,
  PRIMARY KEY (`id_proyecto`),
  UNIQUE KEY `id_docente` (`id_docente`)
) ENGINE=InnoDB AUTO_INCREMENT=40 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `proyectos`
--

INSERT INTO `proyectos` (`id_proyecto`, `titulo`, `nombre_ponente_uno`, `nombre_ponente_dos`, `tipo_proyecto`, `subtipo_proyecto`, `id_docente`) VALUES
(39, 'proyecto de ciencias', 'asdasd', 'asdsad', 'innovacion y/o desarrollo', 'en curso', 20);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `resultado`
--

DROP TABLE IF EXISTS `resultado`;
CREATE TABLE IF NOT EXISTS `resultado` (
  `id_res` int(11) NOT NULL AUTO_INCREMENT,
  `subtotal_1` int(11) NOT NULL,
  `subtotal_2` int(11) NOT NULL,
  `subtotal_3` int(11) NOT NULL,
  `total` int(11) NOT NULL,
  `id_evaluacion` int(11) NOT NULL,
  PRIMARY KEY (`id_res`),
  UNIQUE KEY `id_proyecto` (`id_evaluacion`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `resultado`
--

INSERT INTO `resultado` (`id_res`, `subtotal_1`, `subtotal_2`, `subtotal_3`, `total`, `id_evaluacion`) VALUES
(8, 19, 6, 0, 25, 29);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario_login`
--

DROP TABLE IF EXISTS `usuario_login`;
CREATE TABLE IF NOT EXISTS `usuario_login` (
  `id_login` int(11) NOT NULL AUTO_INCREMENT,
  `usuario` varchar(200) COLLATE utf8_spanish_ci NOT NULL,
  `password` varchar(200) COLLATE utf8_spanish_ci NOT NULL,
  `tipo_cuenta` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `pin` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  PRIMARY KEY (`id_login`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `usuario_login`
--

INSERT INTO `usuario_login` (`id_login`, `usuario`, `password`, `tipo_cuenta`, `pin`) VALUES
(1, 'admin@admin.com', '$2y$10$ZFylvphZUWzQpuHutGC1peMLB31mNjUNBu796Q6uF4XARhQOvaHG.', 'admin', ''),
(2, 'docente@gmail.com', '$2y$10$9/J6/b1B04hPin8Z8pUEHeqGMmFFBy0VaEsbDNj8fIvZ70JWf2B8S', 'docente', '');

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `docentes`
--
ALTER TABLE `docentes`
  ADD CONSTRAINT `docentes_ibfk_1` FOREIGN KEY (`id_login`) REFERENCES `usuario_login` (`id_login`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `evaluaciones`
--
ALTER TABLE `evaluaciones`
  ADD CONSTRAINT `evaluaciones_ibfk_2` FOREIGN KEY (`id_proyecto`) REFERENCES `proyectos` (`id_proyecto`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `proyectos`
--
ALTER TABLE `proyectos`
  ADD CONSTRAINT `proyectos_ibfk_1` FOREIGN KEY (`id_docente`) REFERENCES `docentes` (`id_docente`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `resultado`
--
ALTER TABLE `resultado`
  ADD CONSTRAINT `resultado_ibfk_1` FOREIGN KEY (`id_evaluacion`) REFERENCES `evaluaciones` (`id_evaluacion`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
