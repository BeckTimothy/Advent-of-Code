/**
 * This is challenge 1 of 2019-12-06 of Advent of Code's 25-day challenge
 * See the readme for an explanation
 *
 * @author Timothy Beck <Dev@TimothyBeck.com>
 */

function orbitCalc(arr) {
	let target = "COM";
	let satellites = [];
	let planetList = [];
	let satelliteList = [];
	let endpoints = [];
	let currentPlanet ;
	let paths = [];

	arr.forEach(item => planetList.push(item.slice(0, 3)));
	arr.forEach(item => satelliteList.push(item.slice(-3, item.length)));

	//forloop find all of our end points
	// for (i = 0; i < satelliteList.length; i++) {
	// 	let count = 0;
	// 	for(j = 0; j < satelliteList.length; j++) {
	// 		if(planetList[j] === satelliteList[i]) {
	// 			count++;
	// 		}
	// 		if(j === planetList.length - 1 && count === 0) {
	// 			endpoints.push(satelliteList[i]);
	// 		}
	// 	}
	// }
	//
	for (i = 0; i < satelliteList.length; i++) {
		let emptyArr = [];
		paths.push(emptyArr);
		currentPlanet = satelliteList[i];

		while (currentPlanet !== 'COM') {

			paths[i].push(arr[arr.findIndex(item => item.slice(-3, item.length) === currentPlanet)]);
			currentPlanet = paths[i][paths[i].length - 1].slice(0, 3);
		}
	}
	//count orbits and create distance from santa arrays
	let totalOrbits = 0;
	for(i=0; i<paths.length; i++) {
		for(j=0; j<paths[i].length; j++) {
			totalOrbits++
		}
	}
	console.log(totalOrbits);
}


let testInput = ['COM)BBB', 'BBB)CCC', 'CCC)DDD', 'DDD)EEE', 'EEE)FFF', 'BBB)GGG', 'GGG)HHH', 'DDD)III', 'EEE)JJJ', 'JJJ)KKK', 'KKK)LLL'];

const input = "2YQ)3JS\n" +
	"GT4)KMQ\n" +
	"FNN)6P6\n" +
	"4BS)PG9\n" +
	"G75)W28\n" +
	"6LQ)4CL\n" +
	"BC1)9G6\n" +
	"KWG)WZF\n" +
	"LGL)W8D\n" +
	"VLG)51L\n" +
	"39Z)984\n" +
	"ZBN)RLW\n" +
	"BCB)SQ2\n" +
	"3VD)2M9\n" +
	"VPC)BCH\n" +
	"SCS)YYP\n" +
	"36V)TLN\n" +
	"LQH)RL5\n" +
	"5PQ)4PF\n" +
	"45J)JRN\n" +
	"TCC)H48\n" +
	"SC9)WLQ\n" +
	"MQ8)2HJ\n" +
	"1KK)QBR\n" +
	"D8L)W8N\n" +
	"YYP)NT6\n" +
	"WHM)PH1\n" +
	"466)4DT\n" +
	"G5V)6BQ\n" +
	"DKQ)MSN\n" +
	"LPV)XDT\n" +
	"VB5)6JB\n" +
	"NB4)4LZ\n" +
	"M4C)YXW\n" +
	"VSD)T8H\n" +
	"GKL)ZT3\n" +
	"WNC)8VG\n" +
	"STR)R7D\n" +
	"5Y2)6DP\n" +
	"46T)NB4\n" +
	"BZP)28S\n" +
	"776)1C1\n" +
	"PPL)2TX\n" +
	"FH2)5YQ\n" +
	"H15)3KT\n" +
	"GR9)7DJ\n" +
	"2JD)43M\n" +
	"8QK)7PP\n" +
	"BYV)H15\n" +
	"21L)JM1\n" +
	"THS)NXG\n" +
	"ZFQ)3DM\n" +
	"49K)6F3\n" +
	"VBW)Z45\n" +
	"4RC)CTJ\n" +
	"3D4)JKQ\n" +
	"5PQ)454\n" +
	"DZ6)9QT\n" +
	"BSY)T4X\n" +
	"BNY)M1S\n" +
	"8QL)6HN\n" +
	"3SX)CJ4\n" +
	"299)GLM\n" +
	"X4B)K67\n" +
	"4MQ)M4Y\n" +
	"FC4)RZ3\n" +
	"QXL)5BC\n" +
	"QKL)JBX\n" +
	"6ZD)3BJ\n" +
	"JY3)PZG\n" +
	"QWB)7SR\n" +
	"RGY)NM3\n" +
	"6CV)G2N\n" +
	"JCX)4MQ\n" +
	"VTZ)F1Z\n" +
	"4ZY)RBZ\n" +
	"CMV)T4S\n" +
	"297)3H8\n" +
	"J7D)VHZ\n" +
	"ZKS)CPB\n" +
	"FBR)Y2T\n" +
	"RZ3)NWG\n" +
	"5BC)H6G\n" +
	"RYC)PQG\n" +
	"ZDG)VVS\n" +
	"PYC)GJC\n" +
	"RPF)2BW\n" +
	"D98)B7G\n" +
	"662)8L5\n" +
	"3T6)RX1\n" +
	"NT6)JCX\n" +
	"23W)8TD\n" +
	"6F3)DD9\n" +
	"353)ZMT\n" +
	"NW4)3VC\n" +
	"R6D)TCZ\n" +
	"5WW)5LC\n" +
	"SJT)RVL\n" +
	"QG5)8JZ\n" +
	"4XF)RPS\n" +
	"C9Q)JWS\n" +
	"5V8)GLG\n" +
	"LFQ)7KS\n" +
	"JXQ)5WH\n" +
	"JRC)7XB\n" +
	"M83)YXM\n" +
	"BFM)S4Y\n" +
	"MF5)HD5\n" +
	"3Q4)SBN\n" +
	"58B)XL9\n" +
	"QR2)P26\n" +
	"7GC)6ZD\n" +
	"W4J)NHX\n" +
	"XVK)3MR\n" +
	"8BD)J9X\n" +
	"CTJ)29M\n" +
	"2SN)MB9\n" +
	"ZVZ)ZKW\n" +
	"F54)D8M\n" +
	"S6Q)RDG\n" +
	"C38)QNY\n" +
	"FQV)3ZB\n" +
	"Z65)NJH\n" +
	"R5H)C9Q\n" +
	"WF7)6FT\n" +
	"R73)P3W\n" +
	"L2T)JGS\n" +
	"Z18)8PY\n" +
	"964)5KW\n" +
	"YP2)V15\n" +
	"G45)WTP\n" +
	"MRP)YCS\n" +
	"22Y)GCS\n" +
	"3RG)2LL\n" +
	"XJK)MHZ\n" +
	"MBL)SF3\n" +
	"Y33)56F\n" +
	"NX3)B1V\n" +
	"F9L)Z6G\n" +
	"RJX)91Q\n" +
	"46Q)795\n" +
	"6P6)H6P\n" +
	"NGG)X2S\n" +
	"RK6)SPT\n" +
	"V8Z)WZR\n" +
	"177)KKY\n" +
	"3VQ)YLL\n" +
	"1WB)CV8\n" +
	"VGJ)Y2V\n" +
	"KC1)23W\n" +
	"LY9)R41\n" +
	"31N)VB5\n" +
	"4MC)28C\n" +
	"YKG)HNR\n" +
	"H5H)R9F\n" +
	"3S1)SZ4\n" +
	"349)MBR\n" +
	"MQ8)BS4\n" +
	"JY6)X4B\n" +
	"17Y)C3Y\n" +
	"NWH)ZBN\n" +
	"2V1)GC6\n" +
	"KMQ)B78\n" +
	"CNB)CR2\n" +
	"FDQ)K83\n" +
	"BVW)ZFC\n" +
	"11S)MDW\n" +
	"X5T)KBZ\n" +
	"KHG)RT7\n" +
	"33M)JHF\n" +
	"RJM)3RG\n" +
	"SXV)1VW\n" +
	"KTF)58S\n" +
	"P9W)R9Q\n" +
	"JDJ)5MX\n" +
	"3YD)15W\n" +
	"NBT)36V\n" +
	"YXW)LRQ\n" +
	"C5T)MF5\n" +
	"J4R)6N4\n" +
	"2JL)RJM\n" +
	"BCH)DZ6\n" +
	"RFV)49S\n" +
	"FBN)2W8\n" +
	"MXG)KTF\n" +
	"2WB)PPP\n" +
	"DC9)GNW\n" +
	"Y9X)N5J\n" +
	"P2N)JDB\n" +
	"TT8)HJM\n" +
	"NSD)LLY\n" +
	"ZDR)LR5\n" +
	"D29)8DV\n" +
	"449)VFH\n" +
	"F3L)BWF\n" +
	"2G2)RR4\n" +
	"RRV)SJT\n" +
	"HJM)5TY\n" +
	"HC8)B3C\n" +
	"8B2)989\n" +
	"W8W)NTK\n" +
	"5T8)KQ3\n" +
	"T3G)BMM\n" +
	"PH1)VR6\n" +
	"R55)QZR\n" +
	"ZVJ)GJ2\n" +
	"39R)JGX\n" +
	"7MK)B5S\n" +
	"XJ1)58B\n" +
	"JVV)2MW\n" +
	"6GQ)49H\n" +
	"26D)PZ6\n" +
	"278)VLJ\n" +
	"1D5)MBL\n" +
	"B41)LQH\n" +
	"RJX)8BD\n" +
	"65K)MPS\n" +
	"QL2)GP6\n" +
	"VKW)B8C\n" +
	"92Z)1N1\n" +
	"Q2H)RG9\n" +
	"7GG)WNF\n" +
	"V75)8JB\n" +
	"C2H)JVR\n" +
	"532)XBT\n" +
	"WFB)3T6\n" +
	"WKN)HHB\n" +
	"3SX)N6G\n" +
	"Q6M)F3T\n" +
	"55C)8LB\n" +
	"JM1)Z65\n" +
	"Z2L)14S\n" +
	"T3G)3YL\n" +
	"CLT)26G\n" +
	"9F7)Z18\n" +
	"53F)DSG\n" +
	"RXJ)S99\n" +
	"J4R)LHP\n" +
	"916)PQB\n" +
	"GVP)DF8\n" +
	"XRM)H3M\n" +
	"9BM)297\n" +
	"X5B)WS5\n" +
	"DGS)BSV\n" +
	"62M)BCC\n" +
	"DZ2)F1L\n" +
	"COM)2JD\n" +
	"V6R)FFX\n" +
	"RW5)XLF\n" +
	"8W4)TM9\n" +
	"XNZ)88J\n" +
	"8PJ)SC2\n" +
	"43J)Y9X\n" +
	"XMY)F9L\n" +
	"93L)BSY\n" +
	"3ZZ)2WB\n" +
	"CPB)KXT\n" +
	"THP)W94\n" +
	"X38)99M\n" +
	"989)QQT\n" +
	"K3K)5MC\n" +
	"X25)TMR\n" +
	"JHX)CNG\n" +
	"RSH)HBN\n" +
	"C8F)3Q8\n" +
	"HQ1)JVV\n" +
	"VGH)YWW\n" +
	"2MP)X54\n" +
	"YXM)5WW\n" +
	"CLN)6JT\n" +
	"RD1)6MF\n" +
	"LWW)JRC\n" +
	"JWS)BX6\n" +
	"W1X)BNH\n" +
	"FM4)7GC\n" +
	"VKZ)W56\n" +
	"BJK)7VY\n" +
	"T4Z)GBB\n" +
	"SSY)D3Q\n" +
	"YWD)KB4\n" +
	"KRG)3L8\n" +
	"HNR)SSV\n" +
	"BD4)VGH\n" +
	"HNJ)LD9\n" +
	"WQT)WFW\n" +
	"CK2)V6R\n" +
	"TS8)KHG\n" +
	"DCY)YL8\n" +
	"4RY)VD6\n" +
	"XK5)S5D\n" +
	"6N1)S3M\n" +
	"CJ4)BQ1\n" +
	"KPJ)NJZ\n" +
	"RG9)3VD\n" +
	"8MZ)2BL\n" +
	"BQ1)21L\n" +
	"MJ2)64V\n" +
	"2GQ)KJB\n" +
	"TBH)FK3\n" +
	"2DJ)9MP\n" +
	"VML)VNV\n" +
	"BC8)J1S\n" +
	"J9X)S7D\n" +
	"C28)7QQ\n" +
	"9PM)K3X\n" +
	"2V2)XJK\n" +
	"FKJ)MWB\n" +
	"D2F)M6X\n" +
	"2BW)F5F\n" +
	"H48)TM1\n" +
	"LVJ)WJZ\n" +
	"TKT)8W5\n" +
	"RR4)FCD\n" +
	"VX5)XYL\n" +
	"1HW)FDG\n" +
	"4YT)34P\n" +
	"T8H)SXM\n" +
	"D8M)K79\n" +
	"WZR)WV1\n" +
	"TMJ)355\n" +
	"HJM)3TP\n" +
	"GP6)33M\n" +
	"B2J)C5Q\n" +
	"JZZ)1LK\n" +
	"YHK)R25\n" +
	"621)YGG\n" +
	"7VY)118\n" +
	"35K)G5Z\n" +
	"NHX)S2Q\n" +
	"M1S)C45\n" +
	"V3F)L16\n" +
	"ZMT)MQR\n" +
	"C9C)Y33\n" +
	"NS8)7RC\n" +
	"HD5)V6N\n" +
	"QM8)GFV\n" +
	"4F4)LHC\n" +
	"3RD)KQC\n" +
	"Z6J)PN7\n" +
	"PHZ)WH1\n" +
	"MSN)YHH\n" +
	"R41)5JF\n" +
	"JPF)NX2\n" +
	"R9P)W6D\n" +
	"S5D)HHY\n" +
	"C3Y)1B7\n" +
	"MGV)R6D\n" +
	"1DD)349\n" +
	"NBJ)ZSR\n" +
	"XYL)ZZZ\n" +
	"HTR)KCS\n" +
	"MK8)9ZM\n" +
	"6ZJ)B86\n" +
	"NRN)Y3H\n" +
	"PQB)SVS\n" +
	"8JB)MPZ\n" +
	"TRP)KBR\n" +
	"W6D)LMN\n" +
	"832)G3Z\n" +
	"11S)CTH\n" +
	"61X)4JQ\n" +
	"4Q6)BRM\n" +
	"PBT)9YT\n" +
	"3ZB)ZKC\n" +
	"RN6)44D\n" +
	"RFZ)ZDG\n" +
	"HYM)4F5\n" +
	"8X3)9F7\n" +
	"DQL)5ZT\n" +
	"KYQ)TH5\n" +
	"R9Q)VJY\n" +
	"5MX)BWM\n" +
	"46X)PPL\n" +
	"LZM)VM1\n" +
	"YZM)SM1\n" +
	"2S3)TT8\n" +
	"5FL)M9J\n" +
	"83W)TDR\n" +
	"9LV)BS8\n" +
	"22W)TCL\n" +
	"HBV)FDB\n" +
	"P2F)1QL\n" +
	"R4B)RKD\n" +
	"FK3)W4P\n" +
	"CFN)PYC\n" +
	"R56)RFV\n" +
	"WHM)17Y\n" +
	"RX2)9WX\n" +
	"WR4)1KN\n" +
	"N98)TS4\n" +
	"GTC)BVY\n" +
	"GRW)BJK\n" +
	"FP2)ZBZ\n" +
	"8VH)GFR\n" +
	"N4W)BLX\n" +
	"44X)D8L\n" +
	"NX2)67X\n" +
	"QMB)QWB\n" +
	"XWR)X4L\n" +
	"96H)6BK\n" +
	"86L)FRQ\n" +
	"CTX)ZRJ\n" +
	"JBX)GD8\n" +
	"PZK)1V4\n" +
	"Z7S)M6N\n" +
	"W8D)KTM\n" +
	"DMS)W6J\n" +
	"5JF)81C\n" +
	"H4P)FLN\n" +
	"HH1)6L5\n" +
	"YZ6)5DX\n" +
	"NWY)TMJ\n" +
	"K83)ZZ6\n" +
	"RS6)P9C\n" +
	"99D)FJ5\n" +
	"7DJ)L4B\n" +
	"KG4)R9K\n" +
	"SPT)HNJ\n" +
	"M9J)SQV\n" +
	"G6S)W3F\n" +
	"KG7)4F4\n" +
	"ZFT)55B\n" +
	"GWG)T4Z\n" +
	"TNK)T9G\n" +
	"PN7)CTR\n" +
	"JQW)QKL\n" +
	"X6V)KG7\n" +
	"P58)9P7\n" +
	"BLB)CG5\n" +
	"RBP)3FR\n" +
	"WZK)964\n" +
	"L4S)M4T\n" +
	"6M5)P8L\n" +
	"B5G)TNT\n" +
	"CVN)X32\n" +
	"NSZ)2V1\n" +
	"SQ2)VWK\n" +
	"CYN)C89\n" +
	"5DX)8LC\n" +
	"LHP)PP8\n" +
	"2TD)NZX\n" +
	"YXW)8XT\n" +
	"KKY)YYC\n" +
	"4KP)51V\n" +
	"29B)S6Q\n" +
	"7KV)RN6\n" +
	"2TX)DKZ\n" +
	"K3Q)GYW\n" +
	"VJY)HRN\n" +
	"T22)KTV\n" +
	"393)ZJ5\n" +
	"HK7)8B2\n" +
	"VLJ)61Z\n" +
	"QXW)SKD\n" +
	"9KB)D4M\n" +
	"YV9)MSB\n" +
	"XND)QG5\n" +
	"RZX)XSP\n" +
	"VHZ)BDJ\n" +
	"14S)SKM\n" +
	"8Y5)96H\n" +
	"B4V)7T9\n" +
	"P9W)JZZ\n" +
	"WHJ)BC8\n" +
	"FZT)ZVJ\n" +
	"MWB)CNF\n" +
	"X32)NH3\n" +
	"1HW)BZP\n" +
	"23Q)ZKS\n" +
	"CTP)L7J\n" +
	"CT6)Q1L\n" +
	"XQJ)4L8\n" +
	"S87)1V9\n" +
	"BRS)L8Q\n" +
	"PFJ)MWH\n" +
	"JGB)FF7\n" +
	"VX5)XD6\n" +
	"T1R)VVD\n" +
	"PFY)ZYC\n" +
	"NWG)WF7\n" +
	"118)XNT\n" +
	"JHF)HZ2\n" +
	"BCC)K3K\n" +
	"LJM)CK2\n" +
	"QW3)NDL\n" +
	"VVD)LJM\n" +
	"F1Z)CJ5\n" +
	"1CL)ZV7\n" +
	"36C)TYG\n" +
	"3RL)PS4\n" +
	"78G)HH1\n" +
	"TLN)CV3\n" +
	"HTQ)BZ6\n" +
	"6X1)TQD\n" +
	"D4M)C19\n" +
	"JGX)8PJ\n" +
	"ST1)Z3V\n" +
	"4JQ)58X\n" +
	"WBF)RYC\n" +
	"3WY)1PP\n" +
	"P2L)MY1\n" +
	"LZM)GP2\n" +
	"BZ1)S2G\n" +
	"D7M)88P\n" +
	"BV9)347\n" +
	"XT1)VHD\n" +
	"PQ9)5KF\n" +
	"YK6)D18\n" +
	"CTL)RXJ\n" +
	"WBF)KWG\n" +
	"PGD)CLN\n" +
	"55L)LXY\n" +
	"BCH)MLM\n" +
	"P38)FPF\n" +
	"8Z5)8KL\n" +
	"LZ7)39R\n" +
	"W16)9JX\n" +
	"GYW)6MN\n" +
	"HCC)8BM\n" +
	"TBH)GRL\n" +
	"CKW)2QL\n" +
	"F74)7GG\n" +
	"67X)WPJ\n" +
	"5W1)5TG\n" +
	"5TG)CRL\n" +
	"DY6)GKL\n" +
	"KRF)KVX\n" +
	"XTH)95D\n" +
	"C89)3X4\n" +
	"ZKC)1SD\n" +
	"M3Q)V45\n" +
	"T4X)DKQ\n" +
	"7WV)LJ2\n" +
	"NCX)CQ9\n" +
	"9QC)WNC\n" +
	"66C)XSH\n" +
	"DSG)49V\n" +
	"TNH)P24\n" +
	"3Z6)8S1\n" +
	"L7J)Q6M\n" +
	"S27)3RL\n" +
	"8L5)7XT\n" +
	"DVJ)K5Z\n" +
	"NWG)SP2\n" +
	"LJF)D8V\n" +
	"V15)53F\n" +
	"KNM)X5B\n" +
	"MY1)QMM\n" +
	"8W7)465\n" +
	"92Z)GDT\n" +
	"K5B)H5H\n" +
	"XQJ)9LV\n" +
	"VM1)VXJ\n" +
	"8KL)NLJ\n" +
	"7RC)B5B\n" +
	"F1L)LKS\n" +
	"61Y)R7Z\n" +
	"VPL)MJS\n" +
	"1TG)DQL\n" +
	"1XZ)1XW\n" +
	"36F)X5X\n" +
	"RL8)TGC\n" +
	"P6S)54K\n" +
	"G89)46X\n" +
	"S49)YGN\n" +
	"FJ5)X86\n" +
	"6R4)HBV\n" +
	"881)W6L\n" +
	"7X6)2SJ\n" +
	"PCB)MVY\n" +
	"67S)881\n" +
	"9JX)36F\n" +
	"2QL)353\n" +
	"4RC)LZM\n" +
	"YM6)J3D\n" +
	"KMQ)D5R\n" +
	"Y3Y)LK8\n" +
	"WCN)8G6\n" +
	"NHL)V8Z\n" +
	"MMP)5LH\n" +
	"HM5)LVF\n" +
	"DLS)BP6\n" +
	"YP5)2DJ\n" +
	"R25)MLB\n" +
	"7MP)9MD\n" +
	"4CQ)VLG\n" +
	"LQH)XQJ\n" +
	"NH3)R71\n" +
	"MC7)R9N\n" +
	"JKW)WRH\n" +
	"RRS)SKP\n" +
	"6SC)QR2\n" +
	"GDC)T1R\n" +
	"ZC8)266\n" +
	"B86)JHP\n" +
	"5YQ)JQW\n" +
	"SC2)NWH\n" +
	"F1N)VY9\n" +
	"V26)X53\n" +
	"B5S)ZVX\n" +
	"F4N)P2N\n" +
	"MKK)S8S\n" +
	"8LC)WM6\n" +
	"3DX)F1T\n" +
	"3F1)YCB\n" +
	"F38)DZN\n" +
	"BWH)PV2\n" +
	"83W)4QQ\n" +
	"H6P)R9P\n" +
	"WLQ)QHQ\n" +
	"6CJ)FS2\n" +
	"WZF)71C\n" +
	"WH1)RJX\n" +
	"4T8)R56\n" +
	"S8S)4V9\n" +
	"S13)NV7\n" +
	"RDG)NSZ\n" +
	"XND)ZJL\n" +
	"1LP)8BS\n" +
	"FDR)Z13\n" +
	"KZG)JDJ\n" +
	"TYG)LZ7\n" +
	"TS3)Y1R\n" +
	"WNF)NCX\n" +
	"6MV)GCN\n" +
	"C2C)NGG\n" +
	"XNT)8F2\n" +
	"WP5)3D4\n" +
	"FDG)L2T\n" +
	"B5B)WZK\n" +
	"42J)FM4\n" +
	"ZZ8)HC3\n" +
	"B2F)LWR\n" +
	"MSR)7HX\n" +
	"VYD)3DB\n" +
	"4LK)4SW\n" +
	"RKD)P1V\n" +
	"3Y6)PFJ\n" +
	"9MP)8W7\n" +
	"28C)GR9\n" +
	"39Z)J2S\n" +
	"9SK)31N\n" +
	"34P)QWS\n" +
	"174)CTP\n" +
	"6S1)CYN\n" +
	"61C)26D\n" +
	"PVJ)PNP\n" +
	"S2G)1S8\n" +
	"K9H)KC3\n" +
	"3Q8)DNK\n" +
	"3VC)Y55\n" +
	"3BJ)XTH\n" +
	"GNW)HFB\n" +
	"CTH)YND\n" +
	"GG6)66C\n" +
	"BJ3)2RH\n" +
	"PS9)GWG\n" +
	"GWR)661\n" +
	"K79)61C\n" +
	"P26)9DF\n" +
	"WM6)1RG\n" +
	"BNH)QXL\n" +
	"W94)WHJ\n" +
	"TMJ)714\n" +
	"CR2)NSD\n" +
	"WLB)FBN\n" +
	"J5D)D2V\n" +
	"MQR)YWD\n" +
	"JSZ)G75\n" +
	"8XT)M45\n" +
	"KTM)JMD\n" +
	"MDW)WH8\n" +
	"NW4)JPF\n" +
	"KQ8)S49\n" +
	"6Q3)SHV\n" +
	"B88)Q2H\n" +
	"FVX)HJ8\n" +
	"8HP)DLQ\n" +
	"B2V)751\n" +
	"LSQ)FKZ\n" +
	"RG9)MJ5\n" +
	"NXG)XKL\n" +
	"DMH)XVK\n" +
	"CXH)H5N\n" +
	"28C)FP2\n" +
	"NDL)YNM\n" +
	"B5S)H3P\n" +
	"G91)B47\n" +
	"F5F)YCQ\n" +
	"6TP)6LQ\n" +
	"ZHJ)LJF\n" +
	"95D)1T9\n" +
	"TH5)LPV\n" +
	"KVX)PGD\n" +
	"Y2P)LLP\n" +
	"Z13)6MV\n" +
	"JH1)3YD\n" +
	"Y3B)LMH\n" +
	"TGC)RZX\n" +
	"3CS)DHM\n" +
	"5ZT)YW3\n" +
	"R9K)Y2P\n" +
	"SRB)KNM\n" +
	"GRL)2MP\n" +
	"LMH)VX5\n" +
	"S7L)RRS\n" +
	"HN9)RV9\n" +
	"MHZ)F54\n" +
	"VFH)XJ1\n" +
	"Z23)NY3\n" +
	"ZBZ)R54\n" +
	"J7D)P9W\n" +
	"X69)K6J\n" +
	"FLN)8QL\n" +
	"QLT)662\n" +
	"D2V)94M\n" +
	"88L)BJ3\n" +
	"G5Z)RW5\n" +
	"1RQ)WBF\n" +
	"JMD)7KV\n" +
	"H6G)QCJ\n" +
	"N21)G91\n" +
	"ZFC)HN5\n" +
	"V51)7TJ\n" +
	"LKS)PQ9\n" +
	"2QS)SQR\n" +
	"M9H)TBH\n" +
	"YLL)JBF\n" +
	"TNM)J5D\n" +
	"WJZ)LLK\n" +
	"QYD)YZM\n" +
	"JPB)Z2L\n" +
	"15P)3F1\n" +
	"C5Y)46T\n" +
	"Q3Y)DNB\n" +
	"2BL)6M4\n" +
	"KTV)B2F\n" +
	"NVY)C5T\n" +
	"5RK)B2V\n" +
	"1QL)ZTF\n" +
	"V5T)G89\n" +
	"VNV)BLB\n" +
	"MHZ)4ZX\n" +
	"K6J)6BV\n" +
	"PV7)W58\n" +
	"S7D)PZK\n" +
	"XDT)CVN\n" +
	"NTK)V75\n" +
	"1N1)93Q\n" +
	"MWH)4Q6\n" +
	"795)3FZ\n" +
	"LVF)4PJ\n" +
	"Y4N)3SX\n" +
	"VR6)K8J\n" +
	"LD9)NVY\n" +
	"NJH)8W4\n" +
	"R9F)C23\n" +
	"GJC)C2H\n" +
	"1N1)CKW\n" +
	"FFX)HNM\n" +
	"BVW)4RY\n" +
	"3KT)LFQ\n" +
	"T23)T1B\n" +
	"CK2)SCS\n" +
	"DD9)WJD\n" +
	"CQ9)NWY\n" +
	"F69)GBW\n" +
	"P6M)NHL\n" +
	"QKL)WQT\n" +
	"3DB)62M\n" +
	"TCC)CW4\n" +
	"LLY)P6W\n" +
	"BWM)DH9\n" +
	"D7M)JF7\n" +
	"DBF)55C\n" +
	"6W1)QL2\n" +
	"RBZ)MK8\n" +
	"CDC)VYF\n" +
	"QCJ)LFK\n" +
	"WPJ)WJK\n" +
	"QNY)WZJ\n" +
	"LLP)SPP\n" +
	"GC6)NNL\n" +
	"BRT)P6S\n" +
	"WXX)1RQ\n" +
	"CJ7)GXR\n" +
	"ZV7)RPF\n" +
	"F51)818\n" +
	"JS6)GCX\n" +
	"RJ4)CC4\n" +
	"BSV)2CN\n" +
	"S8C)GG6\n" +
	"8TD)832\n" +
	"CV3)BFB\n" +
	"3LG)5QH\n" +
	"7XB)QDX\n" +
	"1C2)CDC\n" +
	"FYY)2XF\n" +
	"Z1B)MXW\n" +
	"HFT)G5V\n" +
	"N53)88B\n" +
	"75D)F8B\n" +
	"H3R)7MP\n" +
	"S4Y)3VH\n" +
	"TBM)CFN\n" +
	"X12)5WY\n" +
	"B47)Z3D\n" +
	"3YB)93L\n" +
	"BCZ)PJK\n" +
	"PP8)1C2\n" +
	"8DV)CQR\n" +
	"44D)JH2\n" +
	"9PR)D2F\n" +
	"9BW)STR\n" +
	"PJK)Z9Q\n" +
	"6N4)FDR\n" +
	"S3M)X25\n" +
	"JVR)7F2\n" +
	"71X)TQW\n" +
	"2CN)T4K\n" +
	"GJ2)3QS\n" +
	"1FG)FDQ\n" +
	"J2D)J8Q\n" +
	"KQ3)QJZ\n" +
	"2M9)YP2\n" +
	"W3F)9CG\n" +
	"X42)Q3Y\n" +
	"RD2)V3D\n" +
	"GQB)873\n" +
	"7HX)6N1\n" +
	"DH9)466\n" +
	"FSY)FKJ\n" +
	"HF4)RXD\n" +
	"HLR)ZDR\n" +
	"3FR)HN9\n" +
	"VXJ)49K\n" +
	"SBN)BWH\n" +
	"QS2)W8W\n" +
	"S38)6XH\n" +
	"GPB)C2C\n" +
	"DRX)R5H\n" +
	"3LB)1TG\n" +
	"1PQ)99D\n" +
	"MXW)T23\n" +
	"M6N)59J\n" +
	"YNM)6TP\n" +
	"XT1)M3Q\n" +
	"NGG)RZL\n" +
	"355)DW4\n" +
	"HQK)5BP\n" +
	"YND)JC2\n" +
	"NTQ)V51\n" +
	"TZ7)5D3\n" +
	"HKS)YJC\n" +
	"GR9)Y4N\n" +
	"GZK)Z85\n" +
	"DKZ)H3R\n" +
	"JGB)5F9\n" +
	"88P)RRV\n" +
	"9QT)PSK\n" +
	"FM4)3YK\n" +
	"CRL)88Y\n" +
	"15P)C34\n" +
	"YF8)PLP\n" +
	"YWW)4Q4\n" +
	"8BM)534\n" +
	"HZ6)W4J\n" +
	"MJS)HFT\n" +
	"YGG)RQB\n" +
	"WZJ)P2F\n" +
	"11C)TYM\n" +
	"266)PS9\n" +
	"JC2)C79\n" +
	"1LK)GDC\n" +
	"X2S)PMS\n" +
	"3D6)G2L\n" +
	"V45)VKZ\n" +
	"4JW)351\n" +
	"WWQ)WLB\n" +
	"LMN)WDS\n" +
	"BCZ)K5B\n" +
	"KBR)XRM\n" +
	"GF5)G31\n" +
	"CNB)K8C\n" +
	"PV2)DCJ\n" +
	"DK7)YHK\n" +
	"7BZ)9PM\n" +
	"N87)JJT\n" +
	"4H2)5C5\n" +
	"49Y)PL4\n" +
	"SRC)PDX\n" +
	"559)RPX\n" +
	"DF8)CLW\n" +
	"NM3)D29\n" +
	"BKJ)FNX\n" +
	"WV1)7TL\n" +
	"4LZ)KYQ\n" +
	"XBT)YQW\n" +
	"621)VBW\n" +
	"PSK)532\n" +
	"YF8)5V7\n" +
	"C5Q)N98\n" +
	"ZP5)942\n" +
	"5MC)QRL\n" +
	"GQ1)3VQ\n" +
	"1XW)KRF\n" +
	"RDP)CJ7\n" +
	"6WF)2Z9\n" +
	"FRL)3RD\n" +
	"HG3)2MD\n" +
	"QW3)KCC\n" +
	"YZS)B4V\n" +
	"Z9Q)8MB\n" +
	"45Y)WNM\n" +
	"YCG)KC1\n" +
	"3JS)7WV\n" +
	"FC4)FMG\n" +
	"SNR)FPT\n" +
	"YS3)DK2\n" +
	"6KN)MCD\n" +
	"KTF)4ZY\n" +
	"4WJ)V3F\n" +
	"LWR)F14\n" +
	"TQW)1PS\n" +
	"7CP)81G\n" +
	"ZC8)BKJ\n" +
	"RRV)CTL\n" +
	"XJK)CQK\n" +
	"29M)DXQ\n" +
	"2HJ)Y3B\n" +
	"44S)QW3\n" +
	"54K)6X1\n" +
	"DHM)3B1\n" +
	"SP2)39Z\n" +
	"JBX)1JD\n" +
	"XKL)8XB\n" +
	"2BW)NJQ\n" +
	"RY8)GM5\n" +
	"F3T)6W1\n" +
	"4HD)S38\n" +
	"347)XK5\n" +
	"RPX)YK6\n" +
	"QTV)JHX\n" +
	"54P)GZK\n" +
	"BVY)Y28\n" +
	"1PR)61Y\n" +
	"6BV)1MS\n" +
	"BCC)MJ2\n" +
	"6XH)Y4W\n" +
	"HRN)XNZ\n" +
	"TCZ)ZWG\n" +
	"V5T)L9X\n" +
	"VHD)Z6J\n" +
	"FNX)SRC\n" +
	"DZN)559\n" +
	"P3W)2FL\n" +
	"DNB)HCB\n" +
	"P6W)3WC\n" +
	"KYD)16Y\n" +
	"P42)9SK\n" +
	"HB5)GTC\n" +
	"2Z9)WYF\n" +
	"3S7)3VB\n" +
	"RZL)SSN\n" +
	"9ZM)QHN\n" +
	"718)61X\n" +
	"LLK)PCB\n" +
	"HZ6)KTS\n" +
	"1S8)QMB\n" +
	"F82)J5X\n" +
	"J5M)67S\n" +
	"QKN)WHG\n" +
	"4Q4)LSQ\n" +
	"GBB)YM5\n" +
	"H3P)ZFT\n" +
	"G91)HLY\n" +
	"1KN)BS6\n" +
	"4QQ)8HP\n" +
	"M63)LRJ\n" +
	"PT1)LWW\n" +
	"5WY)ZMH\n" +
	"V6N)9QC\n" +
	"GCN)TNH\n" +
	"64L)9CF\n" +
	"ZQB)BPW\n" +
	"MJ5)S7L\n" +
	"MSJ)NN3\n" +
	"QDX)K3Q\n" +
	"VD6)FRL\n" +
	"67X)P2L\n" +
	"7ZG)BCB\n" +
	"WS9)J5M\n" +
	"PPP)4WJ\n" +
	"7SR)7BZ\n" +
	"YCS)5GJ\n" +
	"R5H)SAN\n" +
	"93Q)RGV\n" +
	"Q17)RJ4\n" +
	"279)WP5\n" +
	"T9G)393\n" +
	"6MN)X12\n" +
	"QMM)FQW\n" +
	"Q9L)PNX\n" +
	"59N)X9H\n" +
	"RPS)WCN\n" +
	"2W8)FQV\n" +
	"RYC)FHS\n" +
	"VVS)D2Z\n" +
	"PNX)XT1\n" +
	"MV2)YOU\n" +
	"6HR)25K\n" +
	"J8Q)8YK\n" +
	"3YD)4KQ\n" +
	"J2S)SRB\n" +
	"WJK)NBJ\n" +
	"CM2)DY6\n" +
	"L8Q)LH3\n" +
	"J1S)TNK\n" +
	"R7Z)BKF\n" +
	"RVL)NXD\n" +
	"4PJ)5RK\n" +
	"5HD)RSH\n" +
	"6JT)24S\n" +
	"M6X)RS6\n" +
	"WRH)12M\n" +
	"91N)83W\n" +
	"HJ8)KPJ\n" +
	"R9F)MBP\n" +
	"LNP)9BW\n" +
	"L16)2GZ\n" +
	"BPZ)3Q4\n" +
	"3H8)15P\n" +
	"RGV)K9H\n" +
	"GXR)DLS\n" +
	"JRN)33H\n" +
	"TNT)WN7\n" +
	"K5Z)TKC\n" +
	"SHV)MGV\n" +
	"N9R)4SS\n" +
	"Y85)HGK\n" +
	"7KS)K3R\n" +
	"SKP)WXX\n" +
	"JHP)HSZ\n" +
	"7QQ)5W1\n" +
	"FNX)TS3\n" +
	"PXK)GVP\n" +
	"SVS)TS8\n" +
	"26V)HTQ\n" +
	"LCL)S8C\n" +
	"MXG)7ZG\n" +
	"MGG)49G\n" +
	"PDX)M9H\n" +
	"G31)44S\n" +
	"GT9)9BM\n" +
	"8XT)2QS\n" +
	"9YT)4JW\n" +
	"CQK)C28\n" +
	"HBN)KYD\n" +
	"FMG)LNP\n" +
	"NJZ)4KP\n" +
	"5XB)BNT\n" +
	"KR3)TBM\n" +
	"96C)1XZ\n" +
	"8QL)SL1\n" +
	"B78)GDS\n" +
	"KYM)HZ6\n" +
	"X5X)G6C\n" +
	"JHX)28D\n" +
	"K32)SR7\n" +
	"YS3)SXV\n" +
	"4CQ)22W\n" +
	"JDB)MM5\n" +
	"YTN)L9H\n" +
	"PG9)783\n" +
	"3FR)96C\n" +
	"6N4)W16\n" +
	"W6J)NS8\n" +
	"MPN)PXK\n" +
	"3FZ)GQ1\n" +
	"GQ1)SC9\n" +
	"M4Y)NSB\n" +
	"2RH)MQ8\n" +
	"BP6)HF4\n" +
	"1V4)JY6\n" +
	"GT4)QS2\n" +
	"KTS)4X4\n" +
	"PZG)X69\n" +
	"8YK)279\n" +
	"CNF)LGL\n" +
	"W56)6KN\n" +
	"BKF)4GD\n" +
	"6F4)4T8\n" +
	"1LP)BFM\n" +
	"7N1)PJ9\n" +
	"8JZ)BPQ\n" +
	"5QK)M63\n" +
	"8VG)4KZ\n" +
	"CJ5)6ZJ\n" +
	"43M)FBR\n" +
	"N6Q)FVP\n" +
	"LJ2)S13\n" +
	"SF3)DCY\n" +
	"5GJ)P6M\n" +
	"WHG)L4S\n" +
	"HX5)78G\n" +
	"G3Z)BW5\n" +
	"MLY)JK3\n" +
	"JF7)C5Y\n" +
	"Z3V)YZ6\n" +
	"BZ6)DZ2\n" +
	"PL4)BD4\n" +
	"D71)4RC\n" +
	"HC3)YM6\n" +
	"FZT)Q17\n" +
	"P1V)VWC\n" +
	"MSB)11C\n" +
	"3S1)GPB\n" +
	"J2D)JY3\n" +
	"VY9)JG7\n" +
	"VLJ)6F4\n" +
	"G2N)RZJ\n" +
	"JBF)QYD\n" +
	"984)PWT\n" +
	"M1Q)2TD\n" +
	"PQG)FNN\n" +
	"16Y)CD7\n" +
	"NZX)ZVZ\n" +
	"XTH)TTW\n" +
	"3TP)X39\n" +
	"ZZ6)CBV\n" +
	"2XF)N53\n" +
	"KJB)5XB\n" +
	"X86)DQT\n" +
	"TQD)2S3\n" +
	"3WC)B2J\n" +
	"K3R)JPB\n" +
	"QRL)X38\n" +
	"7XT)FZT\n" +
	"G7Y)BRT\n" +
	"GFR)TDM\n" +
	"751)64L\n" +
	"BPQ)11S\n" +
	"8JZ)LY9\n" +
	"4HK)DHD\n" +
	"61Z)8Z5\n" +
	"K6G)M83\n" +
	"ZVX)48W\n" +
	"1HR)H2Z\n" +
	"LT6)174\n" +
	"51L)4XF\n" +
	"V6N)MPN\n" +
	"WH8)G2V\n" +
	"9YT)RKP\n" +
	"R54)22Y\n" +
	"6JB)VCT\n" +
	"ZSR)MRP\n" +
	"55B)FVX\n" +
	"B58)N21\n" +
	"RKD)8VH\n" +
	"Y55)2HX\n" +
	"1H3)L3Q\n" +
	"VCT)3ZZ\n" +
	"FPT)6GQ\n" +
	"DLQ)45J\n" +
	"ZZZ)BPZ\n" +
	"PWT)VSD\n" +
	"X53)NNK\n" +
	"942)GWR\n" +
	"4V9)59D\n" +
	"GD8)1CL\n" +
	"5WW)CXH\n" +
	"7TJ)XF1\n" +
	"X47)GX3\n" +
	"WFW)RGY\n" +
	"XSP)6CJ\n" +
	"YGN)R4B\n" +
	"14P)F3P\n" +
	"3FZ)TCC\n" +
	"3YK)7DB\n" +
	"5V7)Y85\n" +
	"D5R)BZ1\n" +
	"6BQ)4N1\n" +
	"N6G)DGS\n" +
	"TDR)4H2\n" +
	"XNP)F2J\n" +
	"Z7L)1WB\n" +
	"1B7)BCZ\n" +
	"4MK)MSR\n" +
	"GSM)N3M\n" +
	"5LH)KG4\n" +
	"25K)5V8\n" +
	"TS4)X8N\n" +
	"RV9)QXW\n" +
	"CTR)WHM\n" +
	"SXM)NX3\n" +
	"PNP)CTX\n" +
	"BS4)NBT\n" +
	"X39)F51\n" +
	"JFM)YF8\n" +
	"YJC)MK4\n" +
	"Z45)BVW\n" +
	"1VW)TKT\n" +
	"BX6)278\n" +
	"F3P)3LB\n" +
	"YM5)JS6\n" +
	"56F)3Y6\n" +
	"TDM)PKV\n" +
	"Q5T)2HQ\n" +
	"2W8)BCK\n" +
	"MLM)VTZ\n" +
	"TM1)X42\n" +
	"ZYC)F3L\n" +
	"HHY)Q8W\n" +
	"Z9Q)XDR\n" +
	"61X)DLK\n" +
	"GLM)HK7\n" +
	"KBZ)JKW\n" +
	"BS4)GCM\n" +
	"GCX)6WS\n" +
	"NZX)RX2\n" +
	"CQR)1H3\n" +
	"QZR)92Z\n" +
	"C2H)J2D\n" +
	"ZT3)TZ4\n" +
	"GPY)65K\n" +
	"R22)3Z6\n" +
	"CNG)SNR\n" +
	"R71)N6Q\n" +
	"M7C)MF8\n" +
	"BMM)1FG\n" +
	"FCB)6CV\n" +
	"7YT)GRW\n" +
	"28D)R73\n" +
	"2LL)M4C\n" +
	"WCL)Q6B\n" +
	"4L8)2SN\n" +
	"X54)43J\n" +
	"41W)4GT\n" +
	"D8V)1PQ\n" +
	"783)THP\n" +
	"WPT)R22\n" +
	"GRW)YTN\n" +
	"4KZ)9V6\n" +
	"Y2T)RD1\n" +
	"YCQ)G6S\n" +
	"DK2)TNM\n" +
	"TYM)N7F\n" +
	"2SJ)P42\n" +
	"DCJ)Q9L\n" +
	"YW3)PHZ\n" +
	"V9L)MKK\n" +
	"BPW)DK7\n" +
	"FKZ)WWQ\n" +
	"P5W)CLY\n" +
	"FQW)6HR\n" +
	"NB4)MGG\n" +
	"SZ4)VPL\n" +
	"TKC)HB5\n" +
	"QQT)3JB\n" +
	"4SW)F4N\n" +
	"351)VYD\n" +
	"T4K)J9Z\n" +
	"1SD)GF5\n" +
	"4GT)8QK\n" +
	"H5N)449\n" +
	"PZK)Z7S\n" +
	"LR5)DMS\n" +
	"24S)75D\n" +
	"59J)B58\n" +
	"8J9)YS3\n" +
	"V3D)PBT\n" +
	"H3M)HQK\n" +
	"PKV)584\n" +
	"DW4)WS9\n" +
	"5TY)8J9\n" +
	"FDH)7YT\n" +
	"8S1)PV7\n" +
	"1PS)36C\n" +
	"TQL)DRX\n" +
	"RZJ)KZG\n" +
	"Y3H)4MK\n" +
	"3YK)ST1\n" +
	"15W)BV9\n" +
	"B7G)S87\n" +
	"MVY)PJX\n" +
	"NXD)DVJ\n" +
	"HFF)7CP\n" +
	"DD9)CM2\n" +
	"GCL)KQ8\n" +
	"YCB)ZPG\n" +
	"7KS)WCL\n" +
	"D18)P38\n" +
	"4SS)8VD\n" +
	"TNK)ZFQ\n" +
	"6FT)GSM\n" +
	"B1V)W97\n" +
	"7PP)1HW\n" +
	"BRM)JH1\n" +
	"6WL)RDP\n" +
	"PFJ)3LG\n" +
	"19H)55L\n" +
	"GCM)8T2\n" +
	"PZ6)7X6\n" +
	"HHB)XND\n" +
	"LTH)VGJ\n" +
	"58S)K9M\n" +
	"W4P)4YT\n" +
	"4PF)MMP\n" +
	"W8N)5CP\n" +
	"4ZX)M1Q\n" +
	"5QH)1LP\n" +
	"8W5)B41\n" +
	"2HQ)FDC\n" +
	"4KQ)YKG\n" +
	"FDC)K32\n" +
	"ZMH)YV9\n" +
	"3W1)WR4\n" +
	"MBP)THS\n" +
	"Z3D)GPY\n" +
	"DVJ)14P\n" +
	"278)H4P\n" +
	"VWC)49Y\n" +
	"P6W)KR3\n" +
	"ZJL)X5T\n" +
	"7T9)RL8\n" +
	"FS2)TX2\n" +
	"GJC)3D6\n" +
	"F14)TRP\n" +
	"MZ2)B6C\n" +
	"L4B)88L\n" +
	"8XB)3S1\n" +
	"SKD)SSY\n" +
	"ZFQ)VML\n" +
	"SJT)XMY\n" +
	"QHQ)HCC\n" +
	"NNL)F61\n" +
	"6M4)FLR\n" +
	"BDJ)2G2\n" +
	"5F9)RK6\n" +
	"3DM)RY8\n" +
	"T1B)HQ1\n" +
	"L9X)L5S\n" +
	"48W)WFB\n" +
	"7LG)X5Q\n" +
	"N5J)MRY\n" +
	"2BL)G7Y\n" +
	"W58)VPC\n" +
	"WH8)HC8\n" +
	"4DT)NRN\n" +
	"ZPG)6R4\n" +
	"14F)4KS\n" +
	"6BK)BRS\n" +
	"5CP)71X\n" +
	"8PY)Z1B\n" +
	"PDJ)QKN\n" +
	"2MD)T22\n" +
	"S2Q)GCL\n" +
	"L5S)RBP\n" +
	"9WX)3W1\n" +
	"K9M)54P\n" +
	"N7F)MXG\n" +
	"6DP)JXQ\n" +
	"YHH)52C\n" +
	"QBR)621\n" +
	"TCK)ZQB\n" +
	"99Z)9PR\n" +
	"3CS)LVJ\n" +
	"5BC)QWL\n" +
	"D3Q)D71\n" +
	"HN5)6SC\n" +
	"JB3)LCL\n" +
	"JGS)5HD\n" +
	"ZDB)GT9\n" +
	"WTP)C9C\n" +
	"2MW)6G3\n" +
	"B1H)FH2\n" +
	"5LC)NKG\n" +
	"9G6)JGB\n" +
	"FF7)5T8\n" +
	"49G)ZB4\n" +
	"SQR)MSJ\n" +
	"KB4)SCM\n" +
	"NY3)9KB\n" +
	"BS8)8X3\n" +
	"39R)J7D\n" +
	"NN3)CW8\n" +
	"55L)6WL\n" +
	"VYF)3YB\n" +
	"3HC)X6V\n" +
	"58X)FDH\n" +
	"GP2)HLR\n" +
	"FPF)6W9\n" +
	"DQT)2GQ\n" +
	"FDB)MC7\n" +
	"8T2)3HC\n" +
	"JK3)HFF\n" +
	"WN7)4BS\n" +
	"2CC)19H\n" +
	"HNM)B5G\n" +
	"BFB)DMH\n" +
	"6MF)1RR\n" +
	"H6G)LT6\n" +
	"Z1B)FYY\n" +
	"7F2)MZ2\n" +
	"G2V)V9L\n" +
	"6HN)HM5\n" +
	"7DB)ZGJ\n" +
	"B6C)P58\n" +
	"LFK)D98\n" +
	"51L)NXZ\n" +
	"NSB)Q7V\n" +
	"TTW)6S1\n" +
	"873)3S7\n" +
	"3VH)BC1\n" +
	"JJT)MV2\n" +
	"94M)Y3T\n" +
	"2GZ)86L\n" +
	"9P7)ZMG\n" +
	"81C)V26\n" +
	"XD6)ZHJ\n" +
	"NXZ)QLT\n" +
	"PJX)TZ7\n" +
	"HY1)STV\n" +
	"1PP)F1N\n" +
	"FLR)916\n" +
	"ZGJ)W1X\n" +
	"5GJ)718\n" +
	"71C)CLT\n" +
	"4WJ)F74\n" +
	"MC7)7MK\n" +
	"L3Q)2YQ\n" +
	"PMS)HYL\n" +
	"6WS)C8F\n" +
	"K67)4TM\n" +
	"ZB4)NTQ\n" +
	"YZM)41W\n" +
	"QJZ)HY1\n" +
	"4X4)45Y\n" +
	"4QQ)PDJ\n" +
	"YCS)XWR\n" +
	"NJQ)Z7L\n" +
	"5D3)TCK\n" +
	"Y3T)XNP\n" +
	"8YH)B88\n" +
	"PLP)DR3\n" +
	"6W9)JC4\n" +
	"K8J)WKN\n" +
	"N7F)26V\n" +
	"HZ2)N4W\n" +
	"RKP)2V2\n" +
	"GFV)91N\n" +
	"CXH)HX5\n" +
	"TX2)KYM\n" +
	"2C5)T3G\n" +
	"818)23Q\n" +
	"VWK)7LG\n" +
	"M45)VF5\n" +
	"VGJ)HTR\n" +
	"81G)44X\n" +
	"CLN)59N\n" +
	"CV8)NTM\n" +
	"6Q3)B84\n" +
	"HHB)PT1\n" +
	"T6Y)LTH\n" +
	"4CL)KRG\n" +
	"49H)4L7\n" +
	"HGK)4MC\n" +
	"LRQ)8Y5\n" +
	"4GD)T2H\n" +
	"CC4)FC4\n" +
	"B8C)NJS\n" +
	"X5Q)BLS\n" +
	"WFW)46Q\n" +
	"FQV)T6Y\n" +
	"Q1L)4LK\n" +
	"NTM)WDF\n" +
	"K3X)299\n" +
	"NBJ)CT6\n" +
	"2HX)3CS\n" +
	"GX3)D7M\n" +
	"3YL)7L6\n" +
	"49S)4CQ\n" +
	"9V6)JFM\n" +
	"1C1)ZZ8\n" +
	"ZRJ)X47\n" +
	"2FL)HVJ\n" +
	"88L)C38\n" +
	"8LB)1DD\n" +
	"XDR)Y3Y\n" +
	"DLK)5Y2\n" +
	"GBW)2CC\n" +
	"454)RFZ\n" +
	"HSZ)N87\n" +
	"5BP)FSY\n" +
	"C45)M2K\n" +
	"HLY)P5W\n" +
	"BLS)1KK\n" +
	"ZJ5)6M5\n" +
	"ZTF)4HK\n" +
	"MF8)3WY\n" +
	"CG5)2JL\n" +
	"KC3)YF3\n" +
	"FVP)8YH\n" +
	"PJ9)V5T\n" +
	"G2L)WPT\n" +
	"F2J)MLY\n" +
	"SM1)H4R\n" +
	"88B)DC9\n" +
	"KQC)J4R\n" +
	"YHH)99Z\n" +
	"MB9)ZC8\n" +
	"WYF)4PR\n" +
	"DXQ)14F\n" +
	"8MB)35K\n" +
	"NLJ)1D5\n" +
	"SSN)QM8\n" +
	"1JD)YP5\n" +
	"T23)6WF\n" +
	"VJY)29B\n" +
	"WJD)M7C\n" +
	"LXY)BNY\n" +
	"26V)Z23\n" +
	"DR3)YCG\n" +
	"DNK)R55\n" +
	"8BS)BYV\n" +
	"916)F82\n" +
	"B45)177\n" +
	"5WH)YZS\n" +
	"GDS)PVJ\n" +
	"99M)DBF\n" +
	"1RR)FCB\n" +
	"R4B)F38\n" +
	"BSY)F69\n" +
	"NKG)HYM\n" +
	"M4T)VKW\n" +
	"TMR)HKS\n" +
	"6L5)FJQ\n" +
	"P9C)3DX\n" +
	"K8C)1PR\n" +
	"9MD)MW1\n" +
	"GDT)KHD\n" +
	"1PQ)WKW\n" +
	"4F5)5QK\n" +
	"XM8)JZ7\n" +
	"5KW)CNB\n" +
	"CRL)776\n" +
	"BWF)2C5\n" +
	"9CG)ZP5\n" +
	"JC4)RD2\n" +
	"Z6G)5FL\n" +
	"CLW)CMV\n" +
	"P8L)N9R\n" +
	"VF5)GT4\n" +
	"SR7)XM8\n" +
	"GM5)1VR\n" +
	"WJD)6Q3\n" +
	"BLX)5PQ\n" +
	"MK4)B1H\n" +
	"FHS)HG3\n" +
	"Q6B)QTV\n" +
	"1VR)DT7\n" +
	"RQB)B45\n" +
	"Y2V)PFY\n" +
	"C45)TQL\n" +
	"D2Z)8MZ\n" +
	"MPZ)S27\n" +
	"3B1)42J\n" +
	"YZS)Q5T\n" +
	"QWL)K6G\n" +
	"714)G45\n" +
	"F8B)1HR\n" +
	"X4L)ZDB\n" +
	"WNM)JSZ\n" +
	"661)NW4\n" +
	"JH2)7N1\n" +
	"J5X)GQB\n" +
	"B3C)JB3\n" +
	"M2K)4HD";
let puzzleInput = input.split("\n");
//console.log(puzzleInput);
orbitCalc(puzzleInput);