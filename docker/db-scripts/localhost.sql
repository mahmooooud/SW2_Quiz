-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Apr 26, 2019 at 04:58 PM
-- Server version: 8.0.13-4
-- PHP Version: 7.2.17-0ubuntu0.18.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `VkvsJYvcyA`
--
CREATE DATABASE IF NOT EXISTS `playerground` DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci;
USE `playerground`;

-- --------------------------------------------------------

--
-- Table structure for table `quizdata`
--

CREATE TABLE `quizdata` (
  `Title` varchar(50) NOT NULL,
  `SkillType` text NOT NULL,
  `Score` int(11) NOT NULL,
  `PassScore` int(11) NOT NULL,
  `Duration` int(11) NOT NULL,
  `Question1` text NOT NULL,
  `Choice11` text NOT NULL,
  `Choice12` text NOT NULL,
  `Choice13` text NOT NULL,
  `Choice14` text NOT NULL,
  `Question2` text NOT NULL,
  `Choice21` text NOT NULL,
  `Choice22` text NOT NULL,
  `Choice23` text NOT NULL,
  `Choice24` text NOT NULL,
  `Question3` text NOT NULL,
  `Choice31` text NOT NULL,
  `Choice32` text NOT NULL,
  `Choice33` text NOT NULL,
  `Choice34` text NOT NULL,
  `Question4` text NOT NULL,
  `Choice41` text NOT NULL,
  `Choice42` text NOT NULL,
  `Choice43` text NOT NULL,
  `Choice44` text NOT NULL,
  `Question5` text NOT NULL,
  `Choice51` text NOT NULL,
  `Choice52` text NOT NULL,
  `Choice53` text NOT NULL,
  `Choice54` text NOT NULL,
  `AnswerQ1` text NOT NULL,
  `AnswerQ2` text NOT NULL,
  `AnswerQ3` text NOT NULL,
  `AnswerQ4` text NOT NULL,
  `AnswerQ5` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `quizdata`
--

INSERT INTO `quizdata` (`Title`, `SkillType`, `Score`, `PassScore`, `Duration`, `Question1`, `Choice11`, `Choice12`, `Choice13`, `Choice14`, `Question2`, `Choice21`, `Choice22`, `Choice23`, `Choice24`, `Question3`, `Choice31`, `Choice32`, `Choice33`, `Choice34`, `Question4`, `Choice41`, `Choice42`, `Choice43`, `Choice44`, `Question5`, `Choice51`, `Choice52`, `Choice53`, `Choice54`, `AnswerQ1`, `AnswerQ2`, `AnswerQ3`, `AnswerQ4`, `AnswerQ5`) VALUES
('four', 'Web Develope', 10, 3, 30, 'question one', 'one ', 'two', 'three', 'four', 'question two', 'one', 'two', 'three', 'four', 'question three', 'one', 'two', 'three', 'four', 'question four', 'one', 'two', 'three', 'four', 'question five', 'one', 'two', 'three', 'four', 'Choice13', 'Choice24', 'Choice31', 'Choice44', 'Choice54'),
('one', 'Web Desing', 10, 7, 30, 'question one', 'one ', 'two', 'three', 'four', 'question two', 'one', 'two', 'three', 'four', 'question three', 'one', 'two', 'three', 'four', 'question four', 'one', 'two', 'three', 'four', 'five', 'one', 'two', 'three', 'four', 'Choice13', 'Choice22', 'Choice31', 'Choice44', 'Choice53'),
('three', 'IOS Develop', 40, 35, 10, 'question one', 'one ', 'two', 'three', 'four', 'question two', 'one', 'two', 'three', 'four', 'question three', 'one', 'two', 'three', 'four', 'question four', 'one', 'two', 'three', 'four', 'question five', 'one', 'two', 'three', 'four', 'Choice14', 'Choice21', 'Choice33', 'Choice44', 'Choice52'),
('two', 'JAVA', 40, 25, 15, 'question one', 'one ', 'two', 'three', 'four', 'question two', 'one', 'two', 'three', 'four', 'question three', 'one', 'two', 'three', 'four', 'question four', 'one', 'two', 'three', 'four', 'question five', 'one', 'two', 'three', 'four', 'Choice13', 'Choice21', 'Choice33', 'Choice44', 'Choice53');

-- --------------------------------------------------------

--
-- Table structure for table `UserAnswers`
--

CREATE TABLE `UserAnswers` (
  `ID` text COLLATE utf8_unicode_ci NOT NULL,
  `Title` text COLLATE utf8_unicode_ci NOT NULL,
  `Score` int(11) NOT NULL,
  `Choice1` text COLLATE utf8_unicode_ci NOT NULL,
  `Choice2` text COLLATE utf8_unicode_ci NOT NULL,
  `Choice3` text COLLATE utf8_unicode_ci NOT NULL,
  `Choice4` text COLLATE utf8_unicode_ci NOT NULL,
  `Choice5` text COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `UserAnswers`
--

INSERT INTO `UserAnswers` (`ID`, `Title`, `Score`, `Choice1`, `Choice2`, `Choice3`, `Choice4`, `Choice5`) VALUES
('0', 'one', 4, 'Choice13', 'Choice24', 'Choice31', 'Choice44', 'Choice53'),
('0', 'two', 4, 'Choice14', 'Choice22', 'Choice34', 'Choice42', 'Choice53'),
('0', 'one', 4, 'Choice14', 'Choice21', 'Choice34', 'Choice42', 'Choice53'),
('0', 'one', 4, 'Choice12', 'Choice24', 'Choice33', 'Choice42', 'Choice52'),
('0', 'two', 3, 'Choice14', 'Choice22', 'Choice33', 'Choice44', 'Choice53'),
('0', 'one', 4, 'Choice13', 'Choice22', 'Choice33', 'Choice43', 'Choice53'),
('0', 'one', 4, 'Choice13', 'Choice23', 'Choice33', 'Choice43', 'Choice53'),
('0', 'one', 4, 'Choice12', 'Choice23', 'Choice32', 'Choice43', 'Choice52'),
('6', 'three', 2, 'Choice14', 'Choice22', 'Choice33', 'Choice43', 'Choice53');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `quizdata`
--
ALTER TABLE `quizdata`
  ADD UNIQUE KEY `Title` (`Title`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
