USE [master]
GO
/****** Object:  Database [ NICS_Survey]    Script Date: 14/10/2015 15:42:39 ******/
CREATE DATABASE [ NICS_Survey]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N' NICS_Survey', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL12.MSSQLSERVER\MSSQL\DATA\ NICS_Survey.mdf' , SIZE = 5120KB , MAXSIZE = UNLIMITED, FILEGROWTH = 1024KB )
 LOG ON 
( NAME = N' NICS_Survey_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL12.MSSQLSERVER\MSSQL\DATA\ NICS_Survey_log.ldf' , SIZE = 2048KB , MAXSIZE = 2048GB , FILEGROWTH = 10%)
GO
ALTER DATABASE [ NICS_Survey] SET COMPATIBILITY_LEVEL = 120
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [ NICS_Survey].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [ NICS_Survey] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [ NICS_Survey] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [ NICS_Survey] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [ NICS_Survey] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [ NICS_Survey] SET ARITHABORT OFF 
GO
ALTER DATABASE [ NICS_Survey] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [ NICS_Survey] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [ NICS_Survey] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [ NICS_Survey] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [ NICS_Survey] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [ NICS_Survey] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [ NICS_Survey] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [ NICS_Survey] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [ NICS_Survey] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [ NICS_Survey] SET  DISABLE_BROKER 
GO
ALTER DATABASE [ NICS_Survey] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [ NICS_Survey] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [ NICS_Survey] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [ NICS_Survey] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [ NICS_Survey] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [ NICS_Survey] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [ NICS_Survey] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [ NICS_Survey] SET RECOVERY FULL 
GO
ALTER DATABASE [ NICS_Survey] SET  MULTI_USER 
GO
ALTER DATABASE [ NICS_Survey] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [ NICS_Survey] SET DB_CHAINING OFF 
GO
ALTER DATABASE [ NICS_Survey] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [ NICS_Survey] SET TARGET_RECOVERY_TIME = 0 SECONDS 
GO
ALTER DATABASE [ NICS_Survey] SET DELAYED_DURABILITY = DISABLED 
GO
USE [ NICS_Survey]
GO
/****** Object:  User [NICSSurvey_User]    Script Date: 14/10/2015 15:42:39 ******/
CREATE USER [NICSSurvey_User] FOR LOGIN [NICSSurvey_Login] WITH DEFAULT_SCHEMA=[dbo]
GO
ALTER ROLE [db_owner] ADD MEMBER [NICSSurvey_User]
GO
/****** Object:  Table [dbo].[Answer]    Script Date: 14/10/2015 15:42:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Answer](
	[AnswerID] [int] IDENTITY(1,1) NOT NULL,
	[QuestionID] [int] NULL,
	[AnswerText] [varchar](200) NULL,
	[NextQuestionID] [int] NULL
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[Pages]    Script Date: 14/10/2015 15:42:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Pages](
	[PagesID] [int] IDENTITY(1,1) NOT NULL
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Question]    Script Date: 14/10/2015 15:42:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Question](
	[QuestionID] [int] IDENTITY(1,1) NOT NULL,
	[SurveyID] [int] NULL,
	[QuestionText] [varchar](250) NULL,
	[PageID] [int] NULL,
	[QuestionType] [int] NULL
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[QuestionType]    Script Date: 14/10/2015 15:42:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[QuestionType](
	[QuestionTypeID] [int] IDENTITY(1,1) NOT NULL,
	[QuestionTypeDesc] [varchar](50) NULL
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[Survey]    Script Date: 14/10/2015 15:42:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Survey](
	[SurveyID] [int] IDENTITY(1,1) NOT NULL,
	[SurveyTitle] [varchar](100) NULL,
	[SurveyStartDate] [datetime] NULL,
	[SurveyEndDate] [datetime] NULL,
	[SurveyCreatorID] [int] NULL,
	[SurveyStartSummary] [varchar](250) NULL,
	[SurveyEndSummary] [varchar](250) NULL
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[User]    Script Date: 14/10/2015 15:42:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[User](
	[UserID] [int] IDENTITY(1,1) NOT NULL,
	[UserName] [varchar](100) NULL
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  StoredProcedure [dbo].[usp_SurveyInsert]    Script Date: 14/10/2015 15:42:40 ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO

-- Add a row into the "MSagent_parameters" table
cREATE procedure [dbo].[usp_SurveyInsert] (
@p_SurveyTitle varchar(100),
@p_SurveyStartDate datetime,
@p_SurveyEndDate datetime,
@p_SurveyCreatorID int,
@p_SurveyStartSummary varchar(250),
@p_SurveyEndSummary varchar(250)
)
as
    Begin
	Insert Into Survey
	(
		[SurveyTitle],
		[SurveyStartDate],
		[SurveyEndDate],
		[SurveyCreatorID],
		[SurveyStartSummary],
		[SurveyEndSummary]
	)
	Values
	(
		@p_SurveyTitle,
		@p_SurveyTitle,
		@p_SurveyEndDate,
		@p_SurveyCreatorID,
		@p_SurveyStartSummary,
		@p_SurveyEndSummary
	)

	End
GO
USE [master]
GO
ALTER DATABASE [ NICS_Survey] SET  READ_WRITE 
GO
