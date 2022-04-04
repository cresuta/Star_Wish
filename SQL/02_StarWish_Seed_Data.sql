-- Seed Data

USE [StarWish];
GO

-- User Profile
set identity_insert [UserProfile] on
insert into UserProfile (Id, DisplayName, FirstName, LastName, Email, CreateDateTime, ProfileImage) values (1, 'Foo', 'Foo', 'Barington', 'foo@bar.com', '2022-04-04', 'https://www.kindpng.com/picc/m/252-2524695_dummy-profile-image-jpg-hd-png-download.png');
insert into UserProfile (Id, DisplayName, FirstName, LastName, Email, CreateDateTime, ProfileImage) values (2, 'FizzBuzz', 'Fizzy', 'Buzzy', 'fizz@bar.com', '2020-04-02', 'https://www.kindpng.com/picc/m/252-2524695_dummy-profile-image-jpg-hd-png-download.png');
set identity_insert [UserProfile] off


-- MyWishList
set identity_insert [MyWishList] on
insert into MyWishList (Id, [Name], CreateDateTime, NumberOfProducts, TotalCost, UserProfileId) values (1, 'Foo Bar Golf Wish List', '2022-04-04', 3, 368.13, 1);
set identity_insert [MyWishList] off


-- Product
set identity_insert [Product] on
insert into Product (Id, Title, ImageUrl, Price, Quantity, Condition, ItemWebUrl, MyWishListId) values (1, 'Titleist Four Dozen Golf Balls', 'https://acushnet.scene7.com/is/image/titleistrender/2021_ProV1NameplatePNG?$designID=a66be09d4543f2e2afa47fd9ee&$renderID=rid2022_04_04_17_55_08_842&hei=505&$playnumber=1-2021_prov1', 56.19, 1, 'New', 'https://www.ebay.com/itm/283442338159?epid=3031387352&_trkparms=ispr%3D5&hash=item41fe7ad96f:g:c5MAAOSwf0dcp7xs&amdata=enc%3AAQAGAAAAwET7IYWh2CCkMqYl6GMXwjacN9D9n%2FwATfC8dst1yncRbYeqAtQXAGjcUwPhN%2FQC6nka6b%2FhIOnE650K8bqYWrZQrixB77h%2BZOcINCXiN80mgt0GXbmBFTvfEpNbWAg51Yqf5lZvwqe%2BxGnF12655nG9AdlWxiLhjJ%2BTO0K5rOlNqnfyvUKrjhG6DXAe3A6u435Hl9yKcMEmOYMPqHxfET99FtR%2FvdXqsy%2BA4WpXDl9x%2FMJdifsF0Qjh76%2Fa7Z2C3A%3D%3D%7Ctkp%3ABlBMUO7t6tv-Xw', 1), (2, 'TaylorMade Driver Sim2', 'https://i.ebayimg.com/images/g/3jEAAOSwCH1iAHVg/s-l1600.jpg', 299.99, 1, 'New', 'https://www.ebay.com/itm/185284797342?epid=24051806994&_trkparms=ispr%3D1&hash=item2b23d5a39e:g:3jEAAOSwCH1iAHVg&amdata=enc%3AAQAGAAAA4O43FRktAF6QR%2FzwLQmfS7F7cGprbPg581B0Jpyt%2BRZ5dh2muE00f1HVzyrRkG8WC%2BcUwnBkrGpeQSct1PIEFy95GSCAq%2BZDAdzul9SXRbOj7Dvs210uEM041QzBvbC1mjJVcvS1ryiZ40ConZwH5cUHOwqIu%2FG%2F0DaAES4VVcsSRgmlXTt1E0zSmMiL0UApBOz8p%2Fjl2MRFt9iucTlG6yMpY6tYT0RRNocsBK7lXja1Aub31XkDK7TZuDqLm0B8PPJnlc6e1fCEKap5eZ%2BMReC8vLM%2BCGKrid95lLnxJyU7%7Ctkp%3ABFBMsrX32_5f', 1), (3, 'Callaway USA Golf Glove', 'https://i.ebayimg.com/images/g/mnMAAOSwuWpiH-vq/s-l1600.jpg', 11.95, 1, 'New', 'https://www.ebay.com/itm/154878903771?epid=24050782762&_trkparms=ispr%3D1&hash=item240f8085db:g:mnMAAOSwuWpiH-vq&amdata=enc%3AAQAGAAAA4HLUPdfc5vEgZGv6J4Nbg1cK6CXTZEd%2FDB5t%2BPPkYvpmd%2Fr%2Banz8Q00irZgUIMT9iyfzwX4DIkYn6ELBpeaJ3sn8GxLk311ttG17zZQ8ftd%2F5A4JXBub7ltfPSVtEZEWdfTnivapJoa7D3D%2FnRBhz9yUVI51YJVy%2FhQOTBsZ7ny8DvMc8TKRg3k9M10lwfZ3OIxKWizZTF3A49296wvPbBM2qtd4V6YE332GH%2B2LcDBpc7g%2FgtxTv52h4yr8YRM0zFCtG7rzDT0xEXSaVGO1mkUs3g6p9%2BmZ0MsKTTcnSFQH%7Ctkp%3ABFBMmqWF3P5f', 1);
set identity_insert [Product] off