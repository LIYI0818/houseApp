/*
Navicat MySQL Data Transfer

Source Server         : p2p
Source Server Version : 50553
Source Host           : localhost:3306
Source Database       : house

Target Server Type    : MYSQL
Target Server Version : 50553
File Encoding         : 65001

Date: 2019-02-22 17:13:24
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for house
-- ----------------------------
DROP TABLE IF EXISTS `house`;
CREATE TABLE `house` (
  `name` varchar(20) DEFAULT NULL,
  `area` varchar(20) DEFAULT NULL,
  `type` varchar(20) DEFAULT NULL,
  `point` int(10) DEFAULT NULL,
  `price` int(20) DEFAULT NULL,
  `range` varchar(20) DEFAULT NULL,
  `src` varchar(255) DEFAULT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of house
-- ----------------------------
INSERT INTO `house` VALUES ('美的云溪郡', '仁寿县', '4室2厅', '117', '9000', '仁寿大道', 'http://img11.soufunimg.com/viewimage/house/2018_08/23/M1F/0E/FE/ChCE4Vt-TaeIdnCdAAFp4mos2FkABE-zAIGADcAAWn6181/880x600.jpg', '1');
INSERT INTO `house` VALUES ('恒大未来城', '温江区', '3室1厅', '115', '12000', '光华新城', 'http://img6n.soufunimg.com/viewimage/house/2017_03/09/M04/0F/AD/wKgEUVjAsuSIXw7WAAMcrWeRsscAAYfvgF3rKUAAxzF417/600x400c.jpg', '2');
INSERT INTO `house` VALUES ('蓝光雍锦丽府', '高新区', '5室2厅', '176', '19800', '桐梓林', 'http://img11.soufunimg.com/viewimage/house/2017_11/13/M20/14/FF/ChCE4loJVo2IV_NjAAJSQ4i2ZLcAA2a8QCHvPEAAlJb484/600x400c.jpg', '3');
INSERT INTO `house` VALUES ('炎华置信上林开府', '温江区', '3室1厅', '96', '10500', '云溪路', 'http://img11.soufunimg.com/viewimage/house/2018_07/05/M08/0D/FF/ChCE4Fs91xCIRDC3AAKhthlWBLcABDbRAJFbfwAAqHO975/600x400c.jpg', '4');
INSERT INTO `house` VALUES ('中国铁建西派国樾', '天府新区', '4室2厅', '168', '19400', '华府大道', 'http://img11.soufunimg.com/viewimage/house/2018_01/12/M0F/19/14/ChCE4FpYYYKITmolAALfHV4Qn2MAA8zDADDDa4AAt81967/600x400c.jpg', '5');
INSERT INTO `house` VALUES ('保利天空之城', '天府新区', '4室1厅', '140', '15000', '南延线', 'http://img11.soufunimg.com/viewimage/house/2018_09/07/M09/0F/54/ChCE4luSJieIOH7NAAG3nynh9lsABFgawE2w5kAAbe3647/600x400c.jpg', '6');
INSERT INTO `house` VALUES ('保利天玺', '金牛区', '3室1厅', '119', '13833', '欢乐谷', 'http://img11.soufunimg.com/viewimage/house/2018_08/29/M0E/0F/25/ChCE4VuGKwGIaoQ6AAHAAsBo3B0ABFN3AMlByQAAcAa602/600x400c.jpg', '7');
INSERT INTO `house` VALUES ('武侯金茂府', '武侯区', '3室1厅', '195', '28600', '武侯新城', 'http://img11.soufunimg.com/viewimage/house/2018_05/24/M1F/0D/3C/ChCE4lsGgL-IVL2XAAH_GNE39dgABCPGwDkRrEAAf8w330/600x400c.jpg', '8');
INSERT INTO `house` VALUES ('蓝润城', '双流区', '4室1厅', '188', '11800', '体育中心', 'http://img11.soufunimg.com/viewimage/house/2018_08/14/M07/0E/D1/ChCE4FtyOsyIdsdMAAEIc6aOZA0ABEtUwEFMFYAAQiL489/600x400c.jpg', '9');
INSERT INTO `house` VALUES ('左岸名都', '龙泉驿区', '2室1厅', '78', '8000', '西江大道', 'http://img11.soufunimg.com/viewimage/house/2018_12/29/M11/11/67/ChCE4FwnLeiIFau8AADijbt_0twABIvHAEil8gAAOKl940/600x400c.jpg', '10');
