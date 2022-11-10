-- MySQL dump 10.13  Distrib 8.0.31, for Linux (x86_64)
--
-- Host: localhost    Database: ESGDatabase
-- ------------------------------------------------------
-- Server version	8.0.31

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Sessions`
--

DROP TABLE IF EXISTS `Sessions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Sessions` (
  `sid` varchar(36) NOT NULL,
  `expires` datetime DEFAULT NULL,
  `data` text,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Sessions`
--

LOCK TABLES `Sessions` WRITE;
/*!40000 ALTER TABLE `Sessions` DISABLE KEYS */;
INSERT INTO `Sessions` VALUES ('-nN8FvtAGkuAFQpg604pCShee42_8KQA','2022-11-10 22:21:12','{\"cookie\":{\"originalMaxAge\":3600000,\"expires\":\"2022-11-10T22:21:12.958Z\",\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-11-10 21:21:12','2022-11-10 21:21:12'),('-pJdbpGqgOpmiHzcs2L0X6xWPqkiRl_x','2022-11-10 22:21:00','{\"cookie\":{\"originalMaxAge\":3600000,\"expires\":\"2022-11-10T22:21:00.960Z\",\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-11-10 21:21:00','2022-11-10 21:21:00'),('2sKcTIloz55-NrkE6gvtM9ei0TQ1wnNb','2022-11-10 22:20:39','{\"cookie\":{\"originalMaxAge\":3600000,\"expires\":\"2022-11-10T22:20:39.967Z\",\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-11-10 21:20:39','2022-11-10 21:20:39'),('34ReHeD5F82yTfciOOP5XfwuvizLkQTP','2022-11-10 22:21:26','{\"cookie\":{\"originalMaxAge\":3600000,\"expires\":\"2022-11-10T22:21:26.974Z\",\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-11-10 21:21:26','2022-11-10 21:21:26'),('4Wl0l6Y9C8KiDgdoYVrz30e-P0UV4hmx','2022-11-10 22:21:02','{\"cookie\":{\"originalMaxAge\":3600000,\"expires\":\"2022-11-10T22:21:02.950Z\",\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-11-10 21:21:02','2022-11-10 21:21:02'),('51uI0y0YVHyGpuQ5RD-l64vThjUQC_8m','2022-11-10 22:31:47','{\"cookie\":{\"originalMaxAge\":3600000,\"expires\":\"2022-11-10T22:31:47.072Z\",\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-11-10 21:31:47','2022-11-10 21:31:47'),('9pfSlXNctLWfCJguc_2P5mGDaouUHYKR','2022-11-10 22:21:30','{\"cookie\":{\"originalMaxAge\":3600000,\"expires\":\"2022-11-10T22:21:30.943Z\",\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-11-10 21:21:30','2022-11-10 21:21:30'),('aSuOhpczoTGq02UcK3PBahhqTiL-MAdI','2022-11-10 22:20:57','{\"cookie\":{\"originalMaxAge\":3600000,\"expires\":\"2022-11-10T22:20:57.017Z\",\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-11-10 21:20:57','2022-11-10 21:20:57'),('BWqOEeJ_qw9apmjLMAuJToyg5s6q0ONx','2022-11-10 22:21:38','{\"cookie\":{\"originalMaxAge\":3600000,\"expires\":\"2022-11-10T22:21:38.358Z\",\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-11-10 21:21:38','2022-11-10 21:21:38'),('epMDGWCRLgZ9tRB865L7RNLAyIw8BOgk','2022-11-10 22:20:43','{\"cookie\":{\"originalMaxAge\":3600000,\"expires\":\"2022-11-10T22:20:43.961Z\",\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-11-10 21:20:43','2022-11-10 21:20:43'),('Gz9IRjkZ5m87_pjYSDMMP31XJ3l9DDmP','2022-11-10 22:21:18','{\"cookie\":{\"originalMaxAge\":3600000,\"expires\":\"2022-11-10T22:21:18.951Z\",\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-11-10 21:21:18','2022-11-10 21:21:18'),('Hk_GZb8_1d2qrGlMltLt4BaHb7YwC6aE','2022-11-10 22:21:38','{\"cookie\":{\"originalMaxAge\":3600000,\"expires\":\"2022-11-10T22:21:38.335Z\",\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-11-10 21:21:38','2022-11-10 21:21:38'),('HN00oKvmrzAclrbMnnD86P21YC1DT7kx','2022-11-10 22:21:15','{\"cookie\":{\"originalMaxAge\":3600000,\"expires\":\"2022-11-10T22:21:15.953Z\",\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-11-10 21:21:15','2022-11-10 21:21:15'),('ieh4uzRNrc7hcXLWJvUt6EzcnTiOAlPA','2022-11-10 22:17:14','{\"cookie\":{\"originalMaxAge\":3600000,\"expires\":\"2022-11-10T22:17:14.696Z\",\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-11-10 21:17:14','2022-11-10 21:17:14'),('jmLZxkgT-RB7g8672y1lUfk7fGHBUJOq','2022-11-10 22:20:58','{\"cookie\":{\"originalMaxAge\":3600000,\"expires\":\"2022-11-10T22:20:58.947Z\",\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-11-10 21:20:58','2022-11-10 21:20:58'),('K7x78CUC9smhjcIrZAI8iKCtzgYIYwKe','2022-11-10 22:31:45','{\"cookie\":{\"originalMaxAge\":3600000,\"expires\":\"2022-11-10T22:31:45.758Z\",\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-11-10 21:31:45','2022-11-10 21:31:45'),('LjqzDYgjtvIw1NurKjjBUuWv95W3OkEV','2022-11-10 22:31:45','{\"cookie\":{\"originalMaxAge\":3600000,\"expires\":\"2022-11-10T22:31:45.730Z\",\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-11-10 21:31:45','2022-11-10 21:31:45'),('lnWbjHwuTQ2EjkCPqoQDI1H1OPY8_6K5','2022-11-10 22:21:40','{\"cookie\":{\"originalMaxAge\":3600000,\"expires\":\"2022-11-10T22:21:40.566Z\",\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-11-10 21:21:40','2022-11-10 21:21:40'),('MsrqJZf80YPcCJfRvmAc5pnruSmqBmOT','2022-11-10 22:17:14','{\"cookie\":{\"originalMaxAge\":3600000,\"expires\":\"2022-11-10T22:17:14.720Z\",\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-11-10 21:17:14','2022-11-10 21:17:14'),('Mt8fzvphQnMP6hJZw1XJJQKogJ39Rz6K','2022-11-10 22:21:08','{\"cookie\":{\"originalMaxAge\":3600000,\"expires\":\"2022-11-10T22:21:08.959Z\",\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-11-10 21:21:08','2022-11-10 21:21:08'),('QDSsRkIjJPz25D1OOV1ewZ7KfHn7__3S','2022-11-10 22:21:19','{\"cookie\":{\"originalMaxAge\":3600000,\"expires\":\"2022-11-10T22:21:19.950Z\",\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-11-10 21:21:19','2022-11-10 21:21:19'),('qZBJlcNFWG1L8RF0q2n--SneKDlOsDZH','2022-11-10 22:20:50','{\"cookie\":{\"originalMaxAge\":3600000,\"expires\":\"2022-11-10T22:20:50.960Z\",\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-11-10 21:20:50','2022-11-10 21:20:50'),('StmtY_kDKZ7wXIuQGH_pe8acxp_UJBXy','2022-11-10 22:21:21','{\"cookie\":{\"originalMaxAge\":3600000,\"expires\":\"2022-11-10T22:21:21.953Z\",\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-11-10 21:21:21','2022-11-10 21:21:21');
/*!40000 ALTER TABLE `Sessions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `companies`
--

DROP TABLE IF EXISTS `companies`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `companies` (
  `id` int NOT NULL AUTO_INCREMENT,
  `companyName` varchar(255) NOT NULL,
  `industry` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `companies`
--

LOCK TABLES `companies` WRITE;
/*!40000 ALTER TABLE `companies` DISABLE KEYS */;
INSERT INTO `companies` VALUES (1,'BMW','Automobile','2022-11-04 07:41:58','2022-11-04 07:41:58'),(2,'BMW China','Automobile','2022-11-04 07:42:09','2022-11-04 07:42:09'),(3,'BMW Hong Kong','Automobile','2022-11-04 07:42:21','2022-11-04 07:42:21'),(4,'Natwest','Banking','2022-11-04 07:42:32','2022-11-04 07:42:32'),(5,'Honda','Automobile','2022-11-04 07:42:49','2022-11-04 07:42:49');
/*!40000 ALTER TABLE `companies` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reports`
--

DROP TABLE IF EXISTS `reports`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reports` (
  `id` int NOT NULL AUTO_INCREMENT,
  `companyName` varchar(255) NOT NULL,
  `year` int NOT NULL,
  `emissionAmountVerified` tinyint(1) DEFAULT NULL,
  `emissionAmountVerifiedSentences` varchar(255) DEFAULT NULL,
  `hasActiveProgram` tinyint(1) DEFAULT NULL,
  `hasActiveProgramSentences` varchar(255) DEFAULT NULL,
  `hasNetZeroGoal` tinyint(1) DEFAULT NULL,
  `hasNetZeroGoalSentences` varchar(255) DEFAULT NULL,
  `hasProtocol` tinyint(1) DEFAULT NULL,
  `hasProtocolSentences` varchar(255) DEFAULT NULL,
  `emissionTargetVerified` tinyint(1) DEFAULT NULL,
  `emissionTargetVerifiedSentences` varchar(255) DEFAULT NULL,
  `hasTransitionPlan` tinyint(1) DEFAULT NULL,
  `hasTransitionPlanSentences` varchar(255) DEFAULT NULL,
  `hasLeadershipIncentive` tinyint(1) DEFAULT NULL,
  `hasLeadershipIncentiveSentences` varchar(255) DEFAULT NULL,
  `hasSupplierEngagement` tinyint(1) DEFAULT NULL,
  `hasSupplierEngagementSentences` varchar(255) DEFAULT NULL,
  `valueChainEngagementScale` tinyint(1) DEFAULT NULL,
  `valueChainEngagementSentences` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reports`
--

LOCK TABLES `reports` WRITE;
/*!40000 ALTER TABLE `reports` DISABLE KEYS */;
INSERT INTO `reports` VALUES (1,'BMW',2019,1,'emissionAmountVerifiedSentences',1,'hasActiveProgramSentences',1,'hasNetZeroGoalSentences',1,'hasProtocolSentences',1,'emissionTargetVerifiedSentences',1,'hasTransitionPlanSentences',1,'hasLeadershipIncentiveSentences	',1,'hasSupplierEngagementSentences',1,'valueChainEngagementSentences','2022-11-08 01:48:00','2022-11-08 01:48:00'),(2,'BMW',2020,1,'emissionAmountVerifiedSentences',1,'hasActiveProgramSentences',0,NULL,0,NULL,0,NULL,0,NULL,1,'hasLeadershipIncentiveSentences',1,'hasSupplierEngagementSentences',0,NULL,'2022-11-08 01:48:21','2022-11-08 01:48:21'),(3,'BMW',2022,1,'emissionAmountVerifiedSentences',1,'hasActiveProgramSentences',1,'hasNetZeroGoalSentences',0,NULL,0,NULL,0,NULL,0,NULL,0,NULL,1,'valueChainEngagementSentences','2022-11-08 01:48:41','2022-11-08 01:48:41'),(4,'BMW China',2019,1,'emissionAmountVerifiedSentences',0,'',1,'hasNetZeroGoalSentences',1,'hasProtocolSentences',1,'emissionTargetVerifiedSentences',1,'hasTransitionPlanSentences',1,'hasLeadershipIncentiveSentences	',1,'hasSupplierEngagementSentences',1,'valueChainEngagementSentences','2022-11-08 01:48:00','2022-11-08 01:48:00'),(5,'BMW China',2020,1,'emissionAmountVerifiedSentences',1,'hasActiveProgramSentences',1,'hasNetZeroGoalSentences',0,'',1,'emissionTargetVerifiedSentences',1,'hasTransitionPlanSentences',1,'hasLeadershipIncentiveSentences	',1,'hasSupplierEngagementSentences',0,'','2022-11-08 01:48:00','2022-11-08 01:48:00'),(6,'BMW China',2021,0,'',1,'hasActiveProgramSentences',1,'hasNetZeroGoalSentences',0,'',1,'emissionTargetVerifiedSentences',1,'hasTransitionPlanSentences',1,'hasLeadershipIncentiveSentences	',0,'',0,'','2022-11-08 01:48:00','2022-11-08 01:48:00'),(7,'BMW China',2022,1,'emissionAmountVerifiedSentences',1,'hasActiveProgramSentences',1,'hasNetZeroGoalSentences',1,'hasProtocolSentences',1,'emissionTargetVerifiedSentences',1,'hasTransitionPlanSentences',1,'hasLeadershipIncentiveSentences	',0,'',1,'valueChainEngagementSentences','2022-11-08 01:48:00','2022-11-08 01:48:00'),(8,'BMW China',2023,0,'',1,'hasActiveProgramSentences',1,'hasNetZeroGoalSentences',1,'hasProtocolSentences',0,'',1,'hasTransitionPlanSentences',1,'hasLeadershipIncentiveSentences	',1,'hasSupplierEngagementSentences',0,'','2022-11-08 01:48:00','2022-11-08 01:48:00');
/*!40000 ALTER TABLE `reports` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-11-10 21:32:13
