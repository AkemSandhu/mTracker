-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 05, 2025 at 07:49 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mtracker`
--

-- --------------------------------------------------------

--
-- Table structure for table `accounts`
--

CREATE TABLE `accounts` (
  `UserID` int(11) NOT NULL,
  `AccountType` varchar(6) NOT NULL,
  `AccountBalance` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `accounts`
--

INSERT INTO `accounts` (`UserID`, `AccountType`, `AccountBalance`) VALUES
(1, 'CHCKNG', 294),
(1, 'SAVING', 43958),
(3, 'CHCKNG', 10652),
(3, 'SAVING', -3600),
(5, 'CHCKNG', 110),
(5, 'SAVING', 118);

-- --------------------------------------------------------

--
-- Table structure for table `accounttypes`
--

CREATE TABLE `accounttypes` (
  `AccountType` varchar(6) NOT NULL,
  `AccountName` varchar(15) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `accounttypes`
--

INSERT INTO `accounttypes` (`AccountType`, `AccountName`) VALUES
('CHCKNG', 'Checking'),
('SAVING', 'Saving');

-- --------------------------------------------------------

--
-- Table structure for table `budgetentries`
--

CREATE TABLE `budgetentries` (
  `UserID` int(11) NOT NULL,
  `BudgetYear` year(4) NOT NULL,
  `BudgetMonth` decimal(10,0) NOT NULL,
  `BudgetAccount` varchar(5) NOT NULL,
  `BudgetAmount` decimal(10,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `budgetentries`
--

INSERT INTO `budgetentries` (`UserID`, `BudgetYear`, `BudgetMonth`, `BudgetAccount`, `BudgetAmount`) VALUES
(1, '2024', 1, 'CAR', 300.00),
(1, '2024', 3, 'DEBT', 245.00),
(1, '2024', 5, 'CAR', 350.00),
(1, '2024', 6, 'INCM', 1000.00),
(1, '2024', 10, 'CAR', 140.00),
(3, '2024', 6, 'FOOD', 200.00),
(3, '2024', 12, 'HLTH', 390.00),
(5, '2024', 8, 'CAR', 82.00);

-- --------------------------------------------------------

--
-- Table structure for table `months`
--

CREATE TABLE `months` (
  `MonthID` decimal(10,0) NOT NULL,
  `MonthName` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `months`
--

INSERT INTO `months` (`MonthID`, `MonthName`) VALUES
(1, 'January'),
(2, 'February'),
(3, 'March'),
(4, 'April'),
(5, 'May'),
(6, 'June'),
(7, 'July'),
(8, 'August'),
(9, 'September'),
(10, 'October'),
(11, 'November'),
(12, 'December');

-- --------------------------------------------------------

--
-- Table structure for table `portfolioentries`
--

CREATE TABLE `portfolioentries` (
  `UserID` int(11) NOT NULL,
  `TransactionDate` date NOT NULL,
  `StockSymbol` varchar(5) NOT NULL,
  `StockUnitPrice` double NOT NULL,
  `StockQuantity` int(11) NOT NULL,
  `TransactionAmount` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `portfolioentries`
--

INSERT INTO `portfolioentries` (`UserID`, `TransactionDate`, `StockSymbol`, `StockUnitPrice`, `StockQuantity`, `TransactionAmount`) VALUES
(1, '2024-01-01', 'GOOG', 300, 2, 600),
(3, '2024-01-03', 'AAPL', 1200, 3, -3600),
(1, '2024-01-06', 'GOOG', 600, 6, -3600),
(1, '2024-06-17', 'AAPL', 26, 30, 780),
(3, '2024-06-17', 'AAPL', 1000, 2, 2000),
(5, '2024-10-28', 'GOOG', 2, 7, 14);

-- --------------------------------------------------------

--
-- Table structure for table `stocksymbols`
--

CREATE TABLE `stocksymbols` (
  `StockSymbol` varchar(5) NOT NULL,
  `StockName` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `stocksymbols`
--

INSERT INTO `stocksymbols` (`StockSymbol`, `StockName`) VALUES
('AAPL', 'Apple'),
('AMD', 'AMD'),
('AMZN', 'Amazon'),
('GME', 'Gamestop'),
('GOOG', 'Google'),
('META', 'Facebook'),
('MSFT', 'Microsoft'),
('NVDA', 'Nvidia'),
('SHOP', 'Shopify');

-- --------------------------------------------------------

--
-- Table structure for table `transactioncategories`
--

CREATE TABLE `transactioncategories` (
  `CategoryID` varchar(5) NOT NULL,
  `CategoryDescription` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `transactioncategories`
--

INSERT INTO `transactioncategories` (`CategoryID`, `CategoryDescription`) VALUES
('CAR', 'Transportation'),
('DEBT', 'Loan Payments'),
('ENTR', 'Entertainment'),
('FOOD', 'Food'),
('HLTH', 'Healthcare'),
('INCM', 'Income'),
('INSR', 'Insurance'),
('INVS', 'Investments'),
('MISC', 'Miscellaneous'),
('RENT', 'Housing'),
('SUPL', 'Household Items'),
('UTIL', 'Utilities');

-- --------------------------------------------------------

--
-- Table structure for table `transactions`
--

CREATE TABLE `transactions` (
  `TransactionID` int(11) NOT NULL,
  `UserID` int(11) NOT NULL,
  `TransactionDate` date NOT NULL,
  `TransactionYear` year(4) NOT NULL,
  `TransactionMonthID` decimal(10,0) NOT NULL,
  `CategoryID` varchar(5) NOT NULL,
  `TransactionAmount` decimal(10,2) DEFAULT NULL,
  `TransactionDescription` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `transactions`
--

INSERT INTO `transactions` (`TransactionID`, `UserID`, `TransactionDate`, `TransactionYear`, `TransactionMonthID`, `CategoryID`, `TransactionAmount`, `TransactionDescription`) VALUES
(32, 3, '2024-06-17', '2024', 6, 'FOOD', -500.00, 'costco run'),
(33, 3, '2024-06-17', '2024', 6, 'INVS', -2000.00, 'Buy 2 AAPL at 1000.0'),
(34, 1, '2024-06-17', '2024', 6, 'INVS', -2000.00, 'Buy 2 AAPL at 1000.0'),
(35, 1, '2024-06-18', '2024', 6, 'INVS', 1020.00, 'Sell 1 AAPL at $1020.0'),
(38, 1, '2024-06-19', '2024', 6, 'FOOD', -30.00, 'booty cheeks'),
(41, 5, '2024-10-28', '2024', 10, 'INVS', -14.00, 'Buy 7 GOOG at 2.0'),
(42, 5, '2024-10-29', '2024', 10, 'CAR', 60.00, 'helo'),
(43, 3, '2024-06-21', '2024', 6, 'CAR', 0.00, 'SHORDYWYUSHEGGIT'),
(45, 1, '2024-01-02', '2024', 1, 'CAR', 200.00, 'nooo'),
(46, 3, '2024-01-03', '2024', 1, 'INVS', -3600.00, 'test'),
(47, 1, '2024-01-04', '2024', 1, 'CAR', 170.00, 'transport'),
(48, 1, '2024-01-04', '2024', 1, 'CAR', 150.00, 'transport'),
(51, 1, '2024-01-12', '2024', 1, 'CAR', 34.00, 'sfd'),
(55, 3, '2024-02-07', '2024', 2, 'MISC', 456.00, 'bbl');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `UserID` int(11) NOT NULL,
  `UserName` varchar(20) DEFAULT NULL,
  `UserEmail` varchar(50) DEFAULT NULL,
  `UserFirstName` varchar(100) DEFAULT NULL,
  `UserLastName` varchar(100) DEFAULT NULL,
  `UserHashedPassword` varchar(64) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`UserID`, `UserName`, `UserEmail`, `UserFirstName`, `UserLastName`, `UserHashedPassword`) VALUES
(1, 'akem', '', 'Akem', 'Sandhu', 'LPJNul+wow4m6DsqxbninhsWHlwfp0JecwQzYpOLmCQ='),
(2, 'jona', '', 'Yadwinder', 'Sandhu', 'ETTk9KE7Bq6qhHH5NFiaPhgL8/5DLjLh+UVOdqkAd+c='),
(3, 'gw', '', 'Greg', 'Lauder', 'qpcwIVD86BFCXNhFNwKKWvvjfj8TYq1FpR1Gfhev3Jw='),
(4, 'ak', '', 'ert', 'ewee', 'A6xnQhbz4Vx2HuGl4lXwZ5U2I8iziLRFnhP5eNfIRvQ='),
(5, 'username1', '', 'user', 'name', 'yk+1ILqTn36w3rYuwfKlTV87lImik1l3CwdGqDjP7Ww=');

-- --------------------------------------------------------

--
-- Table structure for table `years`
--

CREATE TABLE `years` (
  `Year` year(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `years`
--

INSERT INTO `years` (`Year`) VALUES
('2023'),
('2024');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `accounts`
--
ALTER TABLE `accounts`
  ADD PRIMARY KEY (`UserID`,`AccountType`),
  ADD KEY `Accounts_AccountType_FK` (`AccountType`);

--
-- Indexes for table `accounttypes`
--
ALTER TABLE `accounttypes`
  ADD PRIMARY KEY (`AccountType`);

--
-- Indexes for table `budgetentries`
--
ALTER TABLE `budgetentries`
  ADD PRIMARY KEY (`UserID`,`BudgetYear`,`BudgetMonth`,`BudgetAccount`),
  ADD KEY `Budget_COA_FK` (`BudgetAccount`),
  ADD KEY `Budget_Month_FK` (`BudgetMonth`),
  ADD KEY `Budget_Year_FK` (`BudgetYear`);

--
-- Indexes for table `months`
--
ALTER TABLE `months`
  ADD PRIMARY KEY (`MonthID`);

--
-- Indexes for table `portfolioentries`
--
ALTER TABLE `portfolioentries`
  ADD PRIMARY KEY (`TransactionDate`,`UserID`,`StockSymbol`),
  ADD KEY `Portfolio_Users_FK` (`UserID`),
  ADD KEY `Portfolio_StockSymbols_FK` (`StockSymbol`);

--
-- Indexes for table `stocksymbols`
--
ALTER TABLE `stocksymbols`
  ADD PRIMARY KEY (`StockSymbol`);

--
-- Indexes for table `transactioncategories`
--
ALTER TABLE `transactioncategories`
  ADD PRIMARY KEY (`CategoryID`);

--
-- Indexes for table `transactions`
--
ALTER TABLE `transactions`
  ADD PRIMARY KEY (`TransactionID`),
  ADD KEY `Journal_Month_FK` (`TransactionMonthID`),
  ADD KEY `Journal_Users_FK` (`UserID`),
  ADD KEY `Journal_Year_FK` (`TransactionYear`),
  ADD KEY `Journal_COA_FK` (`CategoryID`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`UserID`);

--
-- Indexes for table `years`
--
ALTER TABLE `years`
  ADD PRIMARY KEY (`Year`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `transactions`
--
ALTER TABLE `transactions`
  MODIFY `TransactionID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=56;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `accounts`
--
ALTER TABLE `accounts`
  ADD CONSTRAINT `Accounts_AccountType_FK` FOREIGN KEY (`AccountType`) REFERENCES `accounttypes` (`AccountType`),
  ADD CONSTRAINT `Accounts_Users_FK` FOREIGN KEY (`UserID`) REFERENCES `users` (`UserID`);

--
-- Constraints for table `budgetentries`
--
ALTER TABLE `budgetentries`
  ADD CONSTRAINT `Budget_COA_FK` FOREIGN KEY (`BudgetAccount`) REFERENCES `transactioncategories` (`CategoryID`),
  ADD CONSTRAINT `Budget_Month_FK` FOREIGN KEY (`BudgetMonth`) REFERENCES `months` (`MonthID`),
  ADD CONSTRAINT `Budget_Users_FK` FOREIGN KEY (`UserID`) REFERENCES `users` (`UserID`),
  ADD CONSTRAINT `Budget_Year_FK` FOREIGN KEY (`BudgetYear`) REFERENCES `years` (`Year`);

--
-- Constraints for table `portfolioentries`
--
ALTER TABLE `portfolioentries`
  ADD CONSTRAINT `Portfolio_StockSymbols_FK` FOREIGN KEY (`StockSymbol`) REFERENCES `stocksymbols` (`StockSymbol`),
  ADD CONSTRAINT `Portfolio_Users_FK` FOREIGN KEY (`UserID`) REFERENCES `users` (`UserID`);

--
-- Constraints for table `transactions`
--
ALTER TABLE `transactions`
  ADD CONSTRAINT `Journal_COA_FK` FOREIGN KEY (`CategoryID`) REFERENCES `transactioncategories` (`CategoryID`),
  ADD CONSTRAINT `Journal_Month_FK` FOREIGN KEY (`TransactionMonthID`) REFERENCES `months` (`MonthID`),
  ADD CONSTRAINT `Journal_Users_FK` FOREIGN KEY (`UserID`) REFERENCES `users` (`UserID`),
  ADD CONSTRAINT `Journal_Year_FK` FOREIGN KEY (`TransactionYear`) REFERENCES `years` (`Year`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
