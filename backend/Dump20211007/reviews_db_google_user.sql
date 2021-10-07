CREATE DATABASE  IF NOT EXISTS `reviews_db` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_bin */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `reviews_db`;
-- MySQL dump 10.13  Distrib 8.0.26, for Win64 (x86_64)
--
-- Host: localhost    Database: reviews_db
-- ------------------------------------------------------
-- Server version	8.0.25

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `google_user`
--

DROP TABLE IF EXISTS `google_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `google_user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(30) COLLATE utf8mb4_bin NOT NULL,
  `user_name` varchar(30) COLLATE utf8mb4_bin NOT NULL,
  `preferences` json DEFAULT NULL,
  `likes_list` json DEFAULT NULL,
  `latest_reviews_list` json DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `google_user`
--

LOCK TABLES `google_user` WRITE;
/*!40000 ALTER TABLE `google_user` DISABLE KEYS */;
INSERT INTO `google_user` VALUES (4,'guemhong3780@gmail.com','이금홍','{\"id\": \"112187814113885023508\", \"name\": \"이금홍\", \"email\": \"guemhong3780@gmail.com\", \"locale\": \"ko\", \"picture\": \"https://lh3.googleusercontent.com/a/AATXAJyzMToCKB2XssUWvFP2LPMDg_xixVFH_-oX8w9n=s96-c\", \"given_name\": \"금홍\", \"family_name\": \"이\", \"verified_email\": true}','{\"id\": \"112187814113885023508\", \"name\": \"이금홍\", \"email\": \"guemhong3780@gmail.com\", \"locale\": \"ko\", \"picture\": \"https://lh3.googleusercontent.com/a/AATXAJyzMToCKB2XssUWvFP2LPMDg_xixVFH_-oX8w9n=s96-c\", \"given_name\": \"금홍\", \"family_name\": \"이\", \"verified_email\": true}','{\"id\": \"112187814113885023508\", \"name\": \"이금홍\", \"email\": \"guemhong3780@gmail.com\", \"locale\": \"ko\", \"picture\": \"https://lh3.googleusercontent.com/a/AATXAJyzMToCKB2XssUWvFP2LPMDg_xixVFH_-oX8w9n=s96-c\", \"given_name\": \"금홍\", \"family_name\": \"이\", \"verified_email\": true}');
/*!40000 ALTER TABLE `google_user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-10-07  0:32:03
