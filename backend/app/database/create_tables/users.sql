CREATE TABLE IF NOT EXISTS `users` (
`user_id`       int(11)         NOT NULL auto_increment     COMMENT 'The id of the user',
`email`         varchar(100)    NOT NULL                    COMMENT 'The email of the user',
`password`      varchar(200)    NOT NULL                    COMMENT 'The password of the user',
PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COMMENT="Contains User Information";