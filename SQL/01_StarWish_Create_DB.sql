USE [master]

IF db_id('StarWish') IS NULl
  CREATE DATABASE [StarWish]
GO

USE [StarWish]
GO


DROP TABLE IF EXISTS [Product];
DROP TABLE IF EXISTS [MyWishList];
DROP TABLE IF EXISTS [UserProfile];

GO

CREATE TABLE [UserProfile] (
  [Id] integer PRIMARY KEY IDENTITY,
  [FirstName] nvarchar(50) NOT NULL,
  [LastName] nvarchar(50) NOT NULL,
  [DisplayName] nvarchar(50) NOT NULL,
  [Email] nvarchar(555) NOT NULL,
  [ProfileImage]  nvarchar(255),
  [CreateDateTime] datetime NOT NULL
)

CREATE TABLE [MyWishList] (
  [Id] integer PRIMARY KEY IDENTITY,
  [Name] nvarchar(50) NOT NULL,
  [CreateDateTime] datetime NOT NULL,
  [NumberOfProducts] integer NOT NULL,
  [TotalCost] integer NOT NULL,
  [UserProfileId] integer not null,

  CONSTRAINT FK_MyWishList_UserProfile FOREIGN KEY([UserProfileId]) REFERENCES [UserProfile] ([Id]),
)

CREATE TABLE [Product] (
  [Id] integer PRIMARY KEY IDENTITY,
  [Title] nvarchar(50) NOT NULL,
  [ImageUrl] nvarchar(1000) NOT NULL,
  [Price] nvarchar(50) NOT NULL,
  [Quantity] nvarchar(555) NOT NULL,
  [Condition] nvarchar(555) NOT NULL,
  [ItemWebUrl]  nvarchar(1000) NOT NULL,
  [MyWishListId] integer not null,

  CONSTRAINT FK_Product_MyWishList FOREIGN KEY([MyWishListId]) REFERENCES [MyWishList] ([Id])
)

GO



