-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Sep 04, 2020 at 08:38 AM
-- Server version: 5.7.26
-- PHP Version: 7.3.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `goldman`
--

-- --------------------------------------------------------

--
-- Table structure for table `portfolio`
--

CREATE TABLE `portfolio` (
	`username` VARCHAR(20) NOT NULL,
    `stock_ticker` VARCHAR(10) NOT NULL,
    `quantity` INT NOT NULL,
    `date_time` DATETIME NOT NULL,
    `buy` BOOLEAN  NOT NULL,
    PRIMARY KEY (`username`, `stock_ticker`, `date_time`),
    FOREIGN KEY (`username`) references `user` (`username`)
); ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `portfolio`
--

INSERT INTO portfolio 
(username, stock_ticker, quantity, date_time, buy)
VALUES 
('edwinlee', 'TSLA', '25', '2020-01-09 15:45:21','1'),
('choozy', 'MSFT', '50', '2020-01-23 20:45:21','1'),
('cedriclsm', 'NFLX', '20', '2020-02-09 09:30:01','1'),
('edwinlee', 'TSLA', '10', '2020-03-22 22:12:21','0');

commit;
