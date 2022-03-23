-- カラミー日報管理システムDB
-- DB名：dairy_report
-- ユーザー名：root
-- パスワード：tkznemou19
-- テーブル：SCRT, TSTG


-- ロール追加（初回DB構築時のみ）
-- CREATE USER 'dairy_report_login'@'localhost' IDENTIFIED BY 'bsadmin';


-- DB新規作成（DB構築時のみ）
-- CREATE DATABASE dairy_report DEFAULT CHARACTER SET utf8;
-- GRANT delete,insert,select,update ON dairy_report.* TO 'dairy_report_login'@'localhost';


-- 旧テーブル削除
DROP TABLE SCRT;
DROP TABLE TSTG;


-- SCRTテーブル
CREATE TABLE SCRT(
    SCRTID int          AUTO_INCREMENT PRIMARY KEY COMMENT '警備日報ID',
    SCRTNM varchar(100) NOT NULL COMMENT '警備員名',
    TRANS1 varchar(4)   COMMENT '交通機関1',
    STRPT1 varchar(100) COMMENT '区間始点1',
    ENDPT1 varchar(100) COMMENT '区間終点1',
    TRFEE1 varchar(5)   COMMENT '交通費1',
    RETRN1 varchar(2)   COMMENT '往復1',
    TRANS2 varchar(4)   COMMENT '交通機関2',
    STRPT2 varchar(100) COMMENT '区間始点2',
    ENDPT2 varchar(100) COMMENT '区間終点2',
    TRFEE2 varchar(5)   COMMENT '交通費2',
    RETRN2 varchar(2)   COMMENT '往復2',
    TRANS3 varchar(4)   COMMENT '交通機関3',
    STRPT3 varchar(100) COMMENT '区間始点3',
    ENDPT3 varchar(100) COMMENT '区間終点3',
    TRFEE3 varchar(5)   COMMENT '交通費3',
    RETRN3 varchar(2)   COMMENT '往復3',
    TRANS4 varchar(4)   COMMENT '交通機関4',
    STRPT4 varchar(100) COMMENT '区間始点4',
    ENDPT4 varchar(100) COMMENT '区間終点4',
    TRFEE4 varchar(5)   COMMENT '交通費4',
    RETRN4 varchar(2)   COMMENT '往復4',
    OVERTM varchar(4)   NOT NULL COMMENT '残業時間',
    TRSSUM varchar(6)   NOT NULL COMMENT '交通費合計',
    RGDTTM timestamp    NOT NULL COMMENT '登録日時'
);

-- TSTGテーブル
CREATE TABLE TSTG(
    TSTGID int           AUTO_INCREMENT PRIMARY KEY COMMENT '試食日報ID',
    TSTGNM varchar(100)  NOT NULL COMMENT '試食実施者名',
    OVERTM varchar(1)    NOT NULL COMMENT '残業有無',
    PRDCT1 varchar(100)  NOT NULL COMMENT '品名1',
    PRICE1 varchar(5)    NOT NULL COMMENT '売価1',
    SLNUM1 varchar(4)    NOT NULL COMMENT '販売数1',
    SLSUM1 varchar(9)    NOT NULL COMMENT '販売金額1',
    TSPPL1 varchar(4)    NOT NULL COMMENT '試食人数1',
    PRDCT2 varchar(100)  COMMENT '品名2',
    PRICE2 varchar(5)    COMMENT '売価2',
    SLNUM2 varchar(4)    COMMENT '販売数2',
    SLSUM2 varchar(9)    COMMENT '販売金額2',
    TSPPL2 varchar(4)    COMMENT '試食人数2',
    PRDCT3 varchar(100)  COMMENT '品名3',
    PRICE3 varchar(5)    COMMENT '売価3',
    SLNUM3 varchar(4)    COMMENT '販売数3',
    SLSUM3 varchar(9)    COMMENT '販売金額3',
    TSPPL3 varchar(4)    COMMENT '試食人数3',
    STTION varchar(100)  NOT NULL COMMENT '展開状況',
    OTRCON varchar(100)  COMMENT 'その他の内容',
    METHOD text          COMMENT '本日の提供方法',
    SLTHTS text          COMMENT '販売の感想',
    FEDBAC text          COMMENT 'お客様のご意見',
    TRANS1 varchar(4)    COMMENT '交通機関1',
    STRPT1 varchar(100)  COMMENT '区間始点1',
    ENDPT1 varchar(100)  COMMENT '区間終点1',
    TRFEE1 varchar(5)    COMMENT '交通費1',
    RETRN1 varchar(2)    COMMENT '往復1',
    TRANS2 varchar(4)    COMMENT '交通機関2',
    STRPT2 varchar(100)  COMMENT '区間始点2',
    ENDPT2 varchar(100)  COMMENT '区間終点2',
    TRFEE2 varchar(5)    COMMENT '交通費2',
    RETRN2 varchar(2)    COMMENT '往復2',
    TRANS3 varchar(4)    COMMENT '交通機関3',
    STRPT3 varchar(100)  COMMENT '区間始点3',
    ENDPT3 varchar(100)  COMMENT '区間終点3',
    TRFEE3 varchar(5)    COMMENT '交通費3',
    RETRN3 varchar(2)    COMMENT '往復3',
    TRANS4 varchar(4)    COMMENT '交通機関4',
    STRPT4 varchar(100)  COMMENT '区間始点4',
    ENDPT4 varchar(100)  COMMENT '区間終点4',
    TRFEE4 varchar(5)    COMMENT '交通費4',
    RETRN4 varchar(2)    COMMENT '往復4',
    TRSSUM varchar(6)    NOT NULL COMMENT '交通費合計',
    CUSNUM varchar(5)    NOT NULL COMMENT '来客数',
    CUSGRP varchar(5)    NOT NULL COMMENT '来客層',
    STOPBY varchar(5)    NOT NULL COMMENT '立ち寄り率',
    PEAKHO varchar(5)    NOT NULL COMMENT 'ピーク時間帯',
    PEAKH1 varchar(2)    NOT NULL COMMENT 'ピーク時間帯1',
    PEAKH2 varchar(2)    NOT NULL COMMENT 'ピーク時間帯2',
    AWARNS varchar(5)    NOT NULL COMMENT '商品認知度',
    AMOUNT varchar(5)    NOT NULL COMMENT '内容量',
    PRDCPC varchar(5)    NOT NULL COMMENT '商品価格',
    REACTN varchar(5)    NOT NULL COMMENT '試食反応',
    INTRST varchar(5)    NOT NULL COMMENT '関心有無',
    INCNTV varchar(5)    NOT NULL COMMENT '購入動機',
    FRQENC varchar(5)    NOT NULL COMMENT '購入頻度',
    AGEGRP varchar(5)    NOT NULL COMMENT '購買年齢層',
    INGFOD varchar(6)    NOT NULL COMMENT '材料費（食品）',
    INGGOD varchar(6)    NOT NULL COMMENT '材料費（日用品）',
    HOTPLT varchar(1)    NOT NULL COMMENT 'ホットプレート持参',
    RECEIT varchar(100)  NOT NULL COMMENT '領収書',
    RGDTTM timestamp     NOT NULL COMMENT '登録日時'
);
