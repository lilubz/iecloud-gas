(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['exports', 'echarts'], factory);
  } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {
    factory(exports, require('echarts'));
  } else {
    factory({}, root.echarts);
  }
}(this, function (exports, echarts) {
  var log = function (msg) {
    if (typeof console !== 'undefined') {
      console && console.error && console.error(msg);
    }
  };
  if (!echarts) {
    log('ECharts is not Loaded');
    return;
  }
  if (!echarts.registerMap) {
    log('ECharts Map is not loaded');
    return;
  }
  echarts.registerMap('china', {
    "type": "FeatureCollection",
    "features": [{
        "type": "Feature",
        "id": "330305",
        "properties": {
          "name": "洞头区",
          "cp": [121.157249, 27.836154],
          "childNum": 52
        },
        "geometry": {
          "type": "MultiPolygon",
          "coordinates": [
            ["@@@@DA@@BA@A@@A@@AA@@@C@ABA@@B@@@BB@@BD@"],
            ["@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@"],
            ["@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@"],
            ["@@@@@@@@@@@@@@@B@@@@@A@@@@@@"],
            ["@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@"],
            ["@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@B@@@@@@@"],
            ["@@@@@@A@@@@@@@A@@@@@@@B@@@@@@@B@@@@@@@"],
            ["@@A@@@@@@A@@@@A@@@@@@B@@@@@@@@@@B@@@@@B@@@@@@@@@"],
            ["@@@@@@B@@@@BB@@@@@B@@@@@@AA@A@@@A@@@"],
            ["@@@@@@BB@@@@@@@BB@@@@@B@@@@@@@@@@@@@@@@@@@@A@@A@@@@@@@@@A@@@@@@A@@@@A@@@@@"],
            ["@@@@A@@@@@A@A@@@A@@@@B@@B@@@B@@@B@@@BA@@"],
            ["@@@@A@@@@@@@@@A@@@@@@@A@@@@@@@BB@@B@@BB@@A@@@@@@@@@@@A@@@@"],
            ["@@@@@@B@@BB@@@@A@@@@@@@@@@BA@@@@@@@@@A@@AB@@@@A@@@@@@B@@@@A@"],
            ["@@@@A@@@@A@@@@A@@@@B@@A@@@@@@@@@@B@@@@@@B@@@@@B@@@@@@@BA@@@@@@@@"],
            ["@@@@A@@@@@@@@@@@@@@@@@A@B@@B@A@B@@@@@@@@@@@@@B@@B@@@@@@@@@@AB@@@@@@A@@A@@@@@"],
            ["@@@@@@@@@B@@@@@@A@@@@@@@@@BB@@@@@@@@@@@@@B@@@@@@@@B@@@@A@@@@@@@@@A@@@@@@@@@AA@"],
            ["@@@@@@B@AA@@A@A@@B@@@@@B@@@@B@@@@@B@@@@A@@"],
            ["@@@@@@@@@@A@@B@@B@@@@@BBB@BBB@B@@@@@AA@@A@@@@@AAA@@@@@@A@@@@@@A@"],
            ["@@B@AA@@@@A@@B@@@B@@@B@@@@B@@@B@@AAA@@"],
            ["@@@@@AA@@@@@A@@@A@@@A@@@@BB@@BB@B@@@B@@A@@@@@@@@"],
            ["@@@@@@@AAAAAA@@@@B@@@BBBB@B@"],
            ["@@@A@@@@E@@@AB@@BBB@@@B@BA"],
            ["@@@A@@@@A@AD@B@BB@@@B@@A@C"],
            ["@@@A@@@@@@@@A@@@@@@A@@A@@@@@@@A@@@@@A@@@AA@@@@@@A@@@@@@@@B@@@@BB@@@@@@BB@@@@B@@@@@B@@@@@@@@@B@@@@@@@B@@@@@"],
            ["@@B@@@BAAA@@AA@@A@@@ADBB@@B@"],
            ["@@@AA@@@AA@@@@A@@@@@@A@@@@A@@@@@@@@B@@@B@@@BB@@@BB@@@@B@@@@@BA@@@@"],
            ["@@AA@@@@@@@@@B@@@@@@@BB@@@@@@B@@@@BA@@BB@@@@@BB@@@@@@@B@A@B@@@@@@A@@@@@@@@@A@@A@@@@A@@@@A@A@A@"],
            ["@@@@@C@@CACBAB@@@B@@D@D@B@@@"],
            ["@@@@CA@@C@AB@BBBBBDA@ABA"],
            ["@@@@@@ECA@A@@B@@@BBBD@B@BA@@"],
            ["@@@@AAE@A@@@@D@@DBD@BA@A"],
            ["@@AAA@@A@@A@@@ABA@@B@@@@BBB@B@B@@@BB@@@@BAA@@A"],
            ["@@AA@@A@@@@@@AA@A@@@A@@B@@@@BB@@BB@@B@B@@BB@@@B@@A@@AA@@@@"],
            ["@@@@ACE@CB@@@BB@DBD@@@BA"],
            ["@@@A@@@AAACAAAA@A@@B@BB@BBBBDBB@"],
            ["@@@@@AAA@@A@@B@@@@A@@@@B@@@@A@@@A@ABA@@BA@B@@BB@B@@@@@@@BA@B@@BA@@B@@@@@B@@@@A@@@@B@@A"],
            ["@@B@BA@@@@@AAAA@@A@@A@@AA@A@CD@@A@@@@BB@@@B@B@@BBB@@B@@@B@@@"],
            ["@@B@B@@@@AA@@@A@@@@@A@@AA@AAA@@@C@@BA@@@A@@@A@@@@@BB@@@@@BB@B@@B@@BB@@B@@@@A@@@@@@@@B@B@@@@@B@BA"],
            ["@@@AB@BBB@@@BBDB@BB@@A@@@AA@@A@@B@BA@AA@@@BAA@@A@@A@A@C@@@A@CAA@CAA@@B@B@@@B@@AB@@@BB@@@B@BB@@B@@@@@B@"],
            ["@@@@@A@@A@@@@@ABA@@AA@A@A@@@A@@AA@A@@@@B@@@@@@@B@@AD@BBB@BBBB@B@@@BAB@B@BBB@@@BA@@AA@@@A@@AA@@BA@@@@@@B@@@@A"],
            ["@@BCAAA@A@A@CACAG@AB@FBDN@FAB@"],
            ["@@B@B@D@D@@CBC@EACCAAACBA@AD@BBF@B@@@D@B"],
            ["@@@A@@@@@A@@A@A@CAA@A@@B@@A@A@AAA@@@A@@@@AA@A@AB@@A@A@@@A@@@AA@@ABBB@@@B@B@B@BBBB@B@DB@BBBB@@@@A@AB@BAB@B@B@B@@@B@BAA@@A@@B@D@B@B@B@@A@@A@A@@@"],
            ["@@@@@@A@@@@@@A@@A@@@A@@@@@@BA@@@@B@B@@@@A@@@@BBB@BB@@BA@@@@@A@@@@B@@BB@@@@B@BBBB@@BBB@B@B@B@B@@A@@@A@@B@B@BAB@@A@A@A@A@@AA@AA@CAA@CA@@A@@@A@@@"],
            ["@@@@A@@AA@AAAA@@C@A@AD@D@@A@A@@B@B@@BBB@@BB@@BB@@@@BA@@@@@@@@@@@A@@@@B@@@@BBBB@@BB@@BBB@DA@BF@BBDBB@@@BAAA@AA@AA@@@@B@@AACBABA@@@A@@@A@@A@@A@@A@@BA@@A@@@AA@@AA@A@@@"],
            ["@@BBA@@@C@CAABC@@B@BB@@BBB@@B@BBB@D@@@BB@BAB@B@@BB@B@@@B@BBBB@DBB@FBD@@ABA@A@ABABB@@BA@A@C@ABAB@@AA@@@AA@A@AECCCA@G@I@@@@B"],
            ["@@ICEASEEBAB@DADBLFFfRXJHBJAFAHABC@EACKGOIICGCIA"],
            ["@@GEKOEAE@I@CB@DBDAFCDEBCBAHBHDHFHJDZPF@FAJCLEBAJCF@F@FDHBP@FA@CACCCeMCAKAICEACA"],
            ["@@EAQGQCOAOCA@CAE@C@GBIJGFIBGBA@MAA@GCIEAAEAGBIDCDAFAL@@BLDHHDPHDBPJFFDFFFLDJ@JCB@F@JAHB`BNBLANIB@LKTSFG@CCGGCSI"],
            ["@@@@BAACA@ABBBBB"],
            ["@@B@BAACAAA@@D@BBB"],
            ["@@@@@@@@@@@@A@@@@@@@@A@@@@@@A@@@@@@@@@@@@@A@@@@@@@@@@@@@@@A@@@@@@@@@@@@B@@@@@@A@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@A@@@@@@@@@@@@@A@@@@@@@@@@@@A@@@@@@@B@@@@@@A@@@@A@@@@@@@@@@A@@@@@@@@@@@@A@@@@A@@@@@@@@@BA@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@AB@@@@@@@@@B@@@@B@@@@B@@@@@BA@@@@@@@@@@@@@A@@B@@@@@@@@BB@@@@@@@@DB@@@@@@@@@@@@@BA@@@@@@@AB@@@@@B@@@@@@@@@@@@A@@@@@@@A@@@@@@B@@@@@@@B@@@@B@@@@@B@@@D@@@@@BB@@B@@B@@@@BB@@B@@@DA@@B@@@B@@@@BBB@@@B@@@@@BA@@@@@@BBDB@@@@@B@@@@@@A@@@@@A@@@@B@@@@@@@BB@@B@@@BB@@B@@@A@@B@@A@@@@@@@@@BB@@B@BB@@@@BB@@@@B@@@@B@@@@@B@@@@@B@@@@B@@@@@@@@@A@IBGAA@GAE@CAO@K@C@G@KBIBGDK@C@ABCBGHCDYTK@C@OAQ@C@_AIBEDOVEFY\\SXYZofMJYNABUDy\\@@@@CBC@CBCDC@A@@BA@A@A@EDC@ABABEBCB@@A@A@CA@BABEFCDGH@BABA@QLEBEHAPB@DBNFRH@@LDB@D@L@HBB@D@D@JAN@J@DAD@J@D@DAD@F@NCF@DA@@NCNENENCB@`IFA`GNUd[q^WPGXCV@TBF@JBZHjRNDHBH@LAHCBC@G@@AQ@@AI@IBEBCHEL@RAHAPCFEFMDM@A@KEUAICGEMGKGEKCIAGBC@KBEBA@@@A@@A@@@@A@@@@@@@@@@@@@@@@@A@@@@@AA@@@@@@B@@@@AA@@@@@@@@@@@@@A@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@A@@@@@@A@@@@@@A@@A@@@@A@@@@@@@@@@@@@@@@@@AA@@@@@@@@B@@@@@@@@@@@@@@A@@@@@@@@@@A@@@@@@@@AB@A@@A@@@@@A@@@@@@A@@@@A@@@@@@A@@@@@BA@@@@@@@@@@@@A@@@@@@@@@@@@@@@@A@@A@@@@@@@@@@A@@@@@@@@@@@@@@@@@@A@@A@@@@@@AA@@@@@@@@@@A@@@@@BA@@@@@@@@@@@A@@@AA@@A@@A@"]
          ],
          "encodeOffsets": [
            [
              [123948, 28702]
            ],
            [
              [124042, 28453]
            ],
            [
              [124042, 28453]
            ],
            [
              [124058, 28469]
            ],
            [
              [124042, 28454]
            ],
            [
              [124062, 28478]
            ],
            [
              [124071, 28411]
            ],
            [
              [124079, 28409]
            ],
            [
              [124153, 28502]
            ],
            [
              [124137, 28613]
            ],
            [
              [124086, 28414]
            ],
            [
              [124137, 28613]
            ],
            [
              [124069, 28414]
            ],
            [
              [124140, 28600]
            ],
            [
              [124082, 28411]
            ],
            [
              [124053, 28456]
            ],
            [
              [123910, 28504]
            ],
            [
              [124076, 28588]
            ],
            [
              [124052, 28358]
            ],
            [
              [124066, 28421]
            ],
            [
              [124131, 28508]
            ],
            [
              [124100, 28393]
            ],
            [
              [124132, 28510]
            ],
            [
              [124039, 28588]
            ],
            [
              [124037, 28397]
            ],
            [
              [124184, 28683]
            ],
            [
              [124129, 28605]
            ],
            [
              [124090, 28362]
            ],
            [
              [124077, 28576]
            ],
            [
              [124060, 28442]
            ],
            [
              [124106, 28365]
            ],
            [
              [124003, 28468]
            ],
            [
              [124126, 28481]
            ],
            [
              [124040, 28345]
            ],
            [
              [124179, 28677]
            ],
            [
              [124166, 28500]
            ],
            [
              [124004, 28476]
            ],
            [
              [123968, 28682]
            ],
            [
              [124128, 28490]
            ],
            [
              [124063, 28423]
            ],
            [
              [123967, 28697]
            ],
            [
              [123978, 28704]
            ],
            [
              [124057, 28438]
            ],
            [
              [124043, 28421]
            ],
            [
              [124025, 28578]
            ],
            [
              [123987, 28444]
            ],
            [
              [123968, 28657]
            ],
            [
              [124111, 28647]
            ],
            [
              [124045, 28620]
            ],
            [
              [123802, 28484]
            ],
            [
              [123812, 28487]
            ],
            [
              [124051, 28459]
            ]
          ]
        }
      },
      {
          "type": "Feature",
          "id": "330301",
          "properties": {
            "name": "市辖区",
            "cp": [120.7, 27.95],
            "childNum": 1
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": ["@@CA@@@@@@A@@@@A@@AB@@@@A@@@@@A@@B@A@B@@@@A@@BA@@@@B@@BB@@@B@@A@@@AD@@CA@@EA@@ICEAGACAA@@ABA@@BC@@CABAA@AAB@AA@ABAC@@AA@@BA@BA@@CA@BAA@BA@@@@@@B@BA@@@@@@@@@@@A@@BAA@@@@A@@@A@@@@BAB@@A@ABA@AB@@@@BB@@@B@@B@@@B@@@BB@@@@A@A@@@BB@B@@@B@@@BA@@@@@@@A@CDAAAD@D@@AB@B@@B@B@@BABB@@@@B@@@@@B@@@@@@D@@@@BAD@@@D@@AD@BAB@B@B@@@BB@@BAA@B@D@@@@@D@@@B@@ABC@C@@A@A@AA@AA@A@@E@@@@@@@@@@@@@AA@@@@B@@@@@@@@A@AAACA@@ACAA@@@@@@A@B@A@@BCAA@A@@AA@A@@@@@@@EAAA@@AB@B@@@B@B@@A@@@ABABA@@@A@@@@B@@A@A@AAA@CB@@@@A@@@A@@AA@AA@@@@@BA@@A@B@@A@@A@@@@A@@@@@C@C@@@@@@B@@@@@@AB@@AAAB@AA@@@@@A@A@@@@@@@B@@B@@A@@@@@@@@@AB@@@@@@@BA@@A@@@A@@A@A@@@@@@@@A@@A@@@BDA@@@@B@@A@@@B@@BA@@@B@@BA@@@@B@@@B@@@@BBA@CB@BA@AB@@@@A@@B@@A@C@@@@@@@@@@BAA@@AB@@A@@A@@@@A@@@ABBB@@AB@@@BAB@B@@A@@B@B@@A@@BA@@@@BA@@@@@A@@B@B@@BBAB@BA@@BAB@@ABA@@@A@@@@B@@@B@B@@A@A@@@A@A@@@@BA@@@@@ACA@AAAA@@@AAAA@@@@@AB@B@@@@A@AA@@@@A@@@AAA@A@@@AAAAAAA@A@ABBA@@A@@@A@@AAA@BA@BB@@@@A@A@@@@A@@AA@B@B@@@@B@@@@B@@@BB@@BA@@@@@AB@A@@@@A@@@@@@AA@@@@@@@@@@@@@@B@@@@@@A@@@@@A@A@@@@A@@@@@B@@@@BB@@@@A@@@@B@@@@B@@@B@AB@@@@AA@@A@@@@@@B@@@@AA@@@@@B@@@@@@A@@@@@@DBB@@A@@@@B@B@@@@@B@@@@AAA@@@@B@@@AAA@@@@A@@A@@@AA@A@@A@@C@@@@@@@A@@@@@@@@A@@B@AA@@@@@@@@A@AB@@@@A@@@@@@@@A@@AB@@@@@@@@AAAAA@@AA@@@A@@BA@CAA@@BAB@@BBBB@B@B@BBB@@@BB@@@@@@B@@@@@@B@BB@@@BB@@@@B@@@AAB@@@AA@@B@@A@@@@@A@@BA@@@A@@@EBAA@BC@AB@B@@AA@@DAAA@@@@A@@@A@B@@BABAAA@@@AB@@AA@@@@AB@@A@@@C@@AA@@B@@AB@@C@@BA@@BA@@@@@@@@B@@@@@@AB@@@@A@@@@@@@@@@@AD@@@@AB@@B@@BAB@@A@A@@BA@@@@@A@@B@@B@@@@@B@@BC@@B@BA@@@@@A@A@@ABAA@B@A@@@@BA@@B@@@@AAA@AA@@A@@@@@@A@@@@CAAAA@@A@@@@@@@ACA@@@B@@@@@@AAA@@@@A@@@@A@B@A@@BAAAB@@@A@@@A@@A@@@@C@@@AA@AC@@A@@BABA@@@A@@@@B@@A@@@A@@@A@@@A@@@ABA@A@CA@@@@B@@B@@A@@@@@A@A@@@@A@@C@@@A@AAA@A@A@@@@@@@@B@B@@@BB@@@A@BBA@@B@@ABA@@@@@BB@AB@@@@@B@@BB@A@@@A@@@@@@B@@@@B@@@@@B@@B@@@@A@@@@B@@@B@B@BBB@B@@@B@@@B@@@B@BB@@@@B@@@@BB@@AB@B@@@B@@BB@@@@BB@@@@A@@@A@A@@@@@@B@B@@@BA@@B@B@BCB@@@@@BD@A@@BB@@@DBB@@B@@@@@@AB@@@@@AA@A@ABCB@@A@@A@@B@BA@AB@@A@@@@EA@@@B@@@B@@AD@@@@@@@@@A@A@@AA@@@@AA@@@@@@A@@@@@@A@@ABA@@AA@@@AB@@@B@@@@@@@@A@@@@@A@@@BBA@@@A@@AAB@@@@@B@@@@ABA@@B@@@@@@A@@@@DA@@A@@ABA@@@@B@@B@@@@BAA@B@AA@A@@@@@@@@BB@@B@@@BA@@@@@A@@@@BA@@@@B@@B@@@@@@@@B@@@@B@@@@B@@A@@@@@@B@B@@@@A@@@@@@@@@A@@B@B@@@@@B@@B@@B@@A@@@AA@AA@@@@@ABDH@@@@B@@BBB@@@B@@FD@@@BB@@BBB@@@@@@BBBB@@BBBB@@BB@@BD@@AB@@BB@B@BA@@@A@@@A@ABA@@BA@@@@@AB@@@@@B@BB@@@@BBB@@BB@@@B@B@BA@@@A@@@@@CB@@ABA@A@@@AB@BAB@B@@@@@B@@A@@@C@C@@@@@@@A@@@A@A@@@@@ADA@@B@@@@A@A@@A@@@B@@@B@@@@A@AAA@@B@@B@@@@B@@@@@@@B@@@@@@@@CBDBDBBDDB@@BB@@@@@@@@B@@B@@@@@@@@B@@B@@BB@@@@@@@@@B@@@@BBB@@@@@@@@A@@@@@@@@BA@@BA@@@@@@@@@@@@@@@@B@B@@@DBFBD@DBB@J@B@D@@@@@B@BAF@D@F@B@B@FBFBB@D@DAB@BABAFCDCBADEFIBADADCFCDAB@B@B@@@B@@B@B@BBBBFBBBBBBB@B@B@B@B@B@BAD@B@D@D@BAD@DCBABA@@@AB@FABAFABAFAF@B@@@F@FBD@B@HBDBDBHBLBBBF@B@F@D@D@D@B@DAD@FADCBABA@A@@@CACBE@A@A@A@A@A@A@IBIBGBA@@BAB@B@DAB@BBFBB@D@FBD@B@B@FADABABADA@ADE@ABCBA@CB@BGDE@C@ABABA@ABC@C@C@A@AAAACACAAAA@CAE@A@@@GBG@@BC@A@@@C@A@A@@@CBC@@@CBCDABADAHCBAB@B@BAHABAB@D@BBD@DBB@B@@@DBD@F@BBD@B@FBJ@B@D@B@B@BAB@@AD@@@B@@@B@BAB@N@J@D@B@B@D@@@B@F@D@FBB@F@F@HAF@JAB@H@NCHAFADAFCFCDBFBD@DBJBB@D@D@D@B@DAH@FAFAD@BANCLCJEB@@@@ADADEDE@@BC@ABE@ABCBABEBABEBA@AFCBABADAIECAECGAC@E@E@G@CBMBCBA@CBCD@@EDED@BCBABGDCBGG@@@@EBABCDCBADABAAAB@@@D@@ABAB@@@AAB@A@AA@AE@@GBACA@EBA@@@C@EBA@EI@@AEEI@AACA@@AAACB@@@@A@AB@@@@@AA@@@A@@@@A@@CC@@A@@B@@@@A@A@@B@B@B@@CACAAB@B@DA@",
            "@@ABEFKFIFABADABA@@@AB@@AB@@@@A@@B@BABC@@@@@A@@@A@@B@@A@@@A@ABMLCD@BBB@@@@A@EF@BA@@BA@@@@@@BA@@@@@@@@B@FADB@@BA@BB@@BB@@@@@@@B@@@@@@@@@B@@@B@@D@@@@B@B@BBDBBB@@@BD@@BB@@D@B@@B@D@BAB@BAB@@A@A@@B@@AD@B@@@B@B@@@BAB@B@BAB@@A@ADA@@@@@AA@@ABAB@@@@ABA@MF@@@@@@@BBB@@BB@BBA@@B@DA@B@@@@A@@@@BB@@@AB@@@@A@@@@B@@A@@@@@@@@@@BA@@@@@@@A@@BA@@@ABA@@@@BA@A@@@@@ABB@A@@B@@@@@@A@@BC@@@A@A@A@A@A@@B@@B@B@B@@@B@@@D@@@B@BBB@@@@AB@@BB@@@BA@@B@B@@@B@@AD@@@A@C@A@@@@@@@@@@@A@@@@@A@@@A@@@@@A@@@@@@@@@DA@@@@A@@@BADABAB@@AB@BABA@@@@BA@@BAB@@@@AB@@BB@BBB@@@@B@@A@@@@B@@B@DADADBB@@@AB@D@@AB@@@@B@B@@B@BAB@@E@AACBA@A@C@@B@@@B@@@B@@D@B@B@@@@@B@@D@BBB@B@BDB@@@B@@A@A@@@@B@BAB@B@@@B@@@@@@BB@B@B@B@BAB@@ABABA@A@A@@@@@@BAB@@@@@B@@A@@@@@@B@@@@B@@@@@@@@BA@B@B@@@@B@@@@@B@@@@B@BB@@@@A@ABCA@@@B@B@BAB@BB@@B@@@BA@@@@@@@@@D@B@@@@A@ABB@@@BB@@BDB@@B@@B@@BB@@AB@@@@A@@@@@AA@BA@@@@A@@A@@@@B@@@@BB@@@B@@@@@@@@B@@@B@@@@B@@B@@@@B@@@@@B@@@B@@A@@@@B@@AB@@A@A@@@@@@B@@@B@BB@@@@B@@@@@@A@A@@A@A@@CAA@C@A@@@ABABA@@@A@@@BB@@@@C@A@A@@B@@@@@@AA@@A@@@@@BBB@@BA@@@EC@@@@@@@@@BB@A@@BA@@@@@A@B@@@BB@@@@AB@@AAA@@B@@B@@B@@@@A@@B@@@@@B@@@@@@A@A@@BA@@@@@A@@@@@A@@B@@@@@@A@@@@@A@@@A@@@DB@@@B@@@B@@B@@@@@@BAB@@@@@BB@@@B@@@@@@@@B@@@@B@@B@@@@@@BD@@B@@@B@@B@B@@BD@@@B@@B@B@BB@@@B@BCBKD@@CBBFJABB@@@B@@@B@BBD@@CBC@@BBD@@C@A@CBA@C@G@C@@@@B@DB@A@A@@@AEA@FJBF@@FJB@FAD@@@B@FAB@BDHA@@BFB@@B@BBA@B@@BABA@@@C@@BABBBABCDADCBAFA@@@@HHDAHCBADA@AFCFC@@DCDAB@DANADAH@F@F@D@HBFDDBJF@@D@DCJCB@B@FAD@JCH@HBBOFGFARKB@BA@AHGDCFEBA@ADBB@B@@@DAFABABAD@FCB@B@B@@AB@D@DCDAD@DA@@@@z[VCBAZMNIpemRSBSUUUEEOO¥KGUYSUemIAQNUN",
            "@@A@@@A@@@AA@@A@@@@A@@AAA@A@@@AA@@@@@@@@@@@@@@A@@@@@@@@@A@@@@@@@@@@@AA@@@@@@@@@@@@@@@@@@A@@@@@@A@@@@@@@@A@@@@@@@@@@AA@@@@@@@@@@@@@@@@@@@@@@@@@A@@A@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@A@@@B@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@A@@@@A@@@@@@@@B@@@@@@@@A@@@@@@@@A@@@@@@@@@B@@@B@@@B@@BB@@@BB@@@@BABA@@BB@BB@@B@@@B@@@BB@@@@A@@@@B@@@@BB@@@@BBBB@B@@@@AB@B@@@@@BBB@@@B@BB@@BADA@@BA@@BAB@@@BA@@@A@@@@B@@@@A@@BA@A@AA@@A@A@@@@@@B@@@B@@@B@@@D@@B@@@B@@B@B@@@B@@@@B@@@B@@@@@B@B@@@@B@B@@@@@@A@C@@@@B@@@@@B@@@@A@@@@@A@@@A@@B@@@@A@@@A@A@@@@B@@A@@@@@@B@@@@A@@@@@@@@@ABB@A@@@@@@@AA@@@@@BA@@@@BAA@B@@@@@@A@@B@@@B@@@@@@@B@@A@@@@@@@@@@B@@@BC@@B@@@@@@@B@@@@@@@BA@@@A@@@@B@@B@@@@@@@@@B@@@@B@@@@B@AB@B@@@@CA@@A@@AAAA@@A@@@@@A@@@@@AA@@A@@@@@@A@@A@@A@A@@AA@@@A@@BA@C@A@AAA@@@@BA@@@@@@@A@@@AB@A@A@@B@@A@@@AA@@@@A@@A@A@@@@@@BAB@@@B@@B@@@@@B@A@@@@B@@@B@@A@AB@@@@A@@B@@@@@@@@@@A@ABAAA@@B@@A@A@@@@A@@AA@@@@A@@A@AA@@@@AA@@@A@@@AB@@A@A@@@@@@AB@B@@@@@@@@AAA@@@BAB@@@@@@@C@@@@@@@BA@@@@@@@@A@AAAAA@@AA@@AA@@A@@@A@@F@BA@@@@@A@BA@A@@@AA@@BA@@B@@B@@@@@@B@B@@@@@@@@A@@@CB@BA@AAA@A@@@A@ABAB@@A@A@A@A@@@@@BB@@B@@B@@CB@@EA@@@@@@@@DDD@@BB@@@B@B@@BB@@BCD@@@@C@CBA@@@A@A@@BABA@@@ABA@@BA@ABA@C@A@A@@@A@@@AAA@A@A@@@C@A@@@A@@@@@@B@@@B@@@B@@A@@B@@@B@@@B@@@@B@@B@@@BAB@@BBB@@BA@@B@@A@A@A@@@A@@@@BA@@@A@@B@@@BAB@@@@@@A@@@@BA@@@@BE@@@@@@@C@A@@@AAA@@@@B@@@@A@AB@A@BA@@@A@A@@@@@@@@@@@@@A@@@@@@@@@@@@@@AA@@@@@@@@@A@@@@@@@@@@@@@@@@A@@@@A@@@@@@@@@@@@B@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@@@@BA@@@@@@@@@@B@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@B@@@@B@B@@B@AB@@@@BB@@@@@B@@@BB@@B@@@B@B@@@DBB@@@@BDBB@@B@@@@@BA@@@@B@@B@@@@@@B@@B@D@@@BBB@@B@@@B@@@@A@ABC@@B@@@B@@AB@@@BB@B@@@BB@@@@@B@@@BBB@@@@@@A@@@AB@@@@@@A@AAA@@BA@@B@@A@A@@@@@@B@@B@@BAB@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@BB@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@B@@AB@BAB@AA@A@A@A@AAA@A@@@A@@@@B@@@@@@@BB@B@@BBBB@B@@@AB@B@B@B@@@AA@@AA@@AA@ACCA@@@@@@A@@B@@@@A@@@AA@@A@@@@@A@A@@@A@A@@@A@A@@A@@A@A@@BC@A@AB@@@@@@A@@@A@@@AA@@@B@@A@@B@@@@@B@@@BABA@A@@@@@@@A@ABA@@@@@A@@@@@@@@@A@AB@@@B@@@B@@@@A@ABAB@@@@@@A@@B@@AA@@@@AA@@@@@A@@@CA@@@@@@A@@@@A@@B@@@@AA@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@AA@@@@@@@@AA@@A@@@@@@@@@@@@@@@@@@@@@@@@@@@@@A@@@@B@@@@@@A@@@@@@@@@@@@@@@@@@B@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@C@@@@@@AB@AA@@@AA@@AA@@A@@@@A@@A@@AAAA@AA@@@@@@BA@@B@@AB@@@BA@@@A@A@@@C@@@@ACBAAC@AAA@ABA@@@A@A@@@@A@@@AAA@@A@@@A@@@A@@@@@@A@@@A@@B@B@@A@@B@AA@@@@@AB@@@@@@@BC@@@@@@A@@@A@ABA@@@@@@@@B@@@B@@A@A@@@@B@@@B@@@@@BA@@@@@@B@@A@@@A@ABA@@@@BA@@@@@ABA@@@A@ABA@AB@@@B@B@@@B@@@BC@@B@B@@A@@BAB@@A@AA@@@BAB@@AB@AA@@@A@@@A@ABAB@@@@CDC@A@@BA@@B@@@@AAA@A@A@AA@B@@A@AAAB@@A@@@CBA@A@@BA@A@@@@@A@A@A@@@C@@@C@A@A@@B@@@B@@@@@@A@@@A@A@@@@BA@@@A@ABAB@@A@A@@@C@@@A@CB@@@@@AAB@@@@A@A@@@@@A@A@@@@@A@@@A@@@@BAB@B@B@B@B@B@@BBBB@@BB@B@@BB@BB@@DBB@@B@@B@BBB@B@B@BBB@B@@@@@B@@@D@@BB@B@B@@B@@@@BB@B@@@B@@BB@@B@@BB@@A@@B@@@B@B@B@@@@@B@@ABBB@@@B@@@B@@BB@B@@@@A@@BA@@@@B@B@@@@@BA@@@@B@@A@@BC@@B@@@B@@BB@@@@@B@B@BB@B@@BB@@@@@@@ABAB@B@@BB@@BB@@@@@@BB@@B@D@B@B@@@BA@@B@@@BA@@@@B@B@@@BB@@B@@BB@@@B@B@BB@@B@@A@@@@@A@@D@BB@@DBBBB@@B@@BB@@@@@@@BBA@@B@@@@@B@@BB@ABAB@@AA@@@@CB@B@@@@BB@@@B@@@B@@@B@B@B@B@@AB@@@@AB@@@B@@CF@@B@@BC@AA@@@B@@AB@B@@A@@A@@AA@@@@@BABBB@@@BA@@A@@A@@@@B@B@@@BA@A@A@@@@B@@F@BBB@B@BB@@@@@BAB@B@B@@B@@B@@A@@@AB@@A@@A@@AA@@A@A@A@A@@B@@AB@@@@@B@B@B@B@@@B@@D@@@@BAB@@@BB@@@B@BABBB@@@@AB@@@@CBA@A@@BA@@@@@A@A@@B@@A@@@@FBB@@@B@@@@BB@@B@B@@@@B@BA@B@@@@AB@@@BB@B@@@B@@@B@@B@@A@@BBB@@A@B@@@@@B@@@B@@@@@BC@@@@BB@@B@@@@@B@@@B@@@@@@@B@@@@@@A@@@@B@@@@@@@B@@@@A@BB@@@B@@@@@B@@BB@@B@@B@@@@@@@@@@BB@BA@@@BA@@B@@@@B@@@@@@B@@B@B@@@@@BA@@@@@@@@BA@@@@B@@BBB@@B@@@@AA@@@@A@@@@@A@AB@@@@@@@@@B@@@@@@A@A@@@@B@@@@A@@A@@@@@@A@@@@@@A@@@@A@@B@@A@@B@@@@@B@@A@@@AA@@A@@@@@@B@B@@B@ABB@A@@A@@@@A@@B@BA@@@BB@@C@@B@@@@@@@@AB@BA@@@@@A@@@@BA@BB@@@B@AA@@B@@@@@B@@@@@@@@@@A@@BA@@B@@BB@BA@@@B@@@@B@@@@@@@BB@@@@BB@@@B@B@@@@@@@@BC@@@A@@@A@@FB@@@@@BA@@BABA@@@@BB@@@DABAB@B@@B@@@@BA@@@@@@@AA@CA@@A@@AB@C@@A@@@@DA@A@A@AB@@A@@@A@A@@@@B@B@@@B@@@@@AA@@@@AA@@@A@@@ABA@@AA@@@@@A@@A@@A@A@@@A@@@A@@@AAA@A@A@A@@@A@@B@@@@@@AA@@@@@A@@@@@@A@@@@B@@@B@A@@AA@@@@@A@@BAA@@@@B@BA@@@AB@AAB@@@A@@A@@@A@A@@@@@@B@B@B@BBB@@@D@@@@B@@B@B@@@@@B@@@@AA@@@@@DBB@B@BA@@B@@@B@@@B@@@B@@@@A@@B@@@B@BA@AB@@@BDB@@B@@@D@@B@@@@B@@@B@@BABB@AB@A@B@@@@@@B@@B@BB@@@@@@@A@@DB@B@@@@@@@BB@BBDB@@@@@B@@@@B@@@BBB@BB@@@@@AB@@A@@B@A@B@AB@BB@B@@@@@B@@A@AD@@AA@@@@@A@@@@AB@@@@@B@@AB@B@@@BA@AA@@@BA@@@@BC@@@@@@@@@@B@@@@@BA@@@@@@@A@@@@@@B@@AB@@AD@@@BA@@@AB@@BD@@@B@@@BA@@@@BB@@BA@@B@BBBA@AA@B@@@B@@@@@BBCB@@BB@@@ABAD@@ABBFA@@B@@@B@@AB@@@@@B@@@@AB@@B@@BA@B@@@A@@A@@A@@AAA@@@@@@@@A@@@@A@@A@@AA@A@A@AAAAA@@BA@AB@DBB@@AB@@@B@@BB@BBBB@@@@@@@@BA@@@B@@@@@@B@@@@@BAB@@@@@@@@@BBA@@@@B@@@@@@B@@@@@@@D@@@@BB@B@@B@@@BB@@@@@BB@B@@@A@@B@BB@@@@@A@@@@@A@A@@B@@@AA@C@@@@B@@@@@@@@A@@@@BB@@@@@A@@@@B@@@BB@@@@BAA@@@A@@@@@@A@@B@@@@@AA@@@@@A@@@@@B@@B@B@@@@@B@@@@@@@@A@@@@@@@@@@@@B@@B@@@@B@@@@@@BBA@@@@B@@AA@@A@@@A@@A@@@@@@A@ABB@@@B@@B@B@@@@@AAB@@ABB@BB@@@B@@@ABBAB@B@BBBBBB@@B@B@BB@@B@@@@@BBB@@@@@@ABA@@@@B@BB@B@@BBBBB@BD@@@@B@@A@@B@B@@@B@B@@@@A@A@@@A@@B@@@B@BA@@BA@AB@@ABAAA@@@A@AB@@@@@B@@A@@B@@AB@@@@A@AB@@@@ABA@A@@BA@@AABA@@B@@@@@@BB@@@BA@@BB@A@@@@@@@@D@B@@@@AB@@@@@BAB@@ADAB@AA@@@@@A@@@A@@B@@AA@@@B@@AA@@@B@@@@A@@B@AC@@B@@@@B@@@@@@B@B@@@@B@@@BB@@A@@@@@@BA@@@@@@@@B@@@@AA@@@@@@@B@B@@@@@B@@BBABB@@BA@@@@@@@A@@@@D@D@@@@@B@@@@@@BB@@@@A@BB@@A@@@@BBB@@BB@@@B@@@@@DAB@BBB@B@@@@A@@B@@@B@BABA@@B@@@@A@A@@@ABA@@BBFB@@@@@@B@B@@BB@B@DB@AB@A@B@@@@@@@BBBD@@DBBB@B@B@@@@@@A@@@@@BB@@@@@@@@@@@@F@@@@BBBB@@B@B@BD@D@BA@@@A@@@C@@@@@C@ABB@AA@@A@@@A@ABA@ABC@@@C@@BC@A@@C@@@@@@@@A@@@@@A@@A@BA@AA@A@@@@ABA@@@CBCBBDCB@@@@@@@B@@A@@@A@@@AAA@@B@B@@@@@AA@@A@@@A@@@@A@@AA@@@@BAB@BAB@@@BA@A@@B@@@B@@@@@BB@AB@@@@@@@@@@@B@@A@A@@@@B@@ABB@ADB@@ABB@@AB@@BD@AB@BBBA@BBB@ABDB@@AD@@AB@BB@DBHBFBJD@@FB@@DB@@BC@@B@@@@A@@AA@@@A@@B@@AB@@@@@@A@B@AB@@@@@B@@@@@BA@@@B@@B@@@@@@@DBB@@C@ABADBDB@@@A@A@AB@B@@@@@@AB@@@DD@@@B@@B@@@B@@B@@@@BAB@@@@@DABB@BB@BD@BB@BF@@B@B@A@@C@A@@D@H@D@B@DAB@D@@@AC@AD@DA@@AC@A@A@@@A@@AAIBAEDA@@LCDA@A@A@@AAA@A@@@@A@@AC@@@A@AA@@@A@@@AC@@@@@@@AA@@@@@@A@@@@@@A@@@A@@A@@@@BA@A@@@@A@@@@A@@@A@@CA@@B@@@B@@@@@B@@@@@@@@AB@@@@@B@@@@@B@@AB@B@@@@@@@@A@@@@@AB@@@@@@AA@@@@AB@BB@@BA@@@@AA@@A@B@@@@@B@@AB@A@@A@@@@@@@@FD@@B@@AA@AA@@@@B@@@BB@@@@@@@AB@B@D@@@@@AA@@B@@@B@BABA@@B@D@B@DB@@@B@BB@B@@@@@@@@A@@A@@A@A@@@A@@@@B@B@@@BA@@@A@@B@@@@A@@@A@@@@@A@@A@@@@A@@A@@@A@@@@@@@@@@A@@AA@@@@@A@@B@@@@B@@B@@ABB@@@@B@@@@@BA@@AA@@@AA@@@CA@AA@@A@@AA@B@B@@A@C@@@@@@@@@B@@A@@@AA@@ABA@A@A@A@@DBBAB@@@@@AAA@@@@@@A@@@@@A@@A@A@B@@A@@@@@@A@@@@@@A@@@@B@@@@A@@@@BA@A@@@@B@B@B@BABA@@BA@A@A@A@AAA@@@@@@@A@@@ABA@A@A@@B@B@@@@A@@CA@A@AAA@A@CA@@@@@A@A@C@@@@A@@@A@@@AD@B@B@DABBF@@@BA@A@AA@A@@@@@BA@@@CBA@@A@CACBCBA@@@@A@@B@@@@A@@A@AAA@@AA@@B@@A@AB@@AB@@@@ABABA@@BA@ABCBAB@@B@@@@@CB@@@@@@@@B@@@@@B@@@B@@@@@B@@@@@@@@@@@B@D@B@@@C@@BA@@@A@A@@@AB@@A@@AA@@B@@A@AAA@@@C@@@A@@@A@A@A@@@@AB@B@B@B@B@@@D@@AB@@@@@@@@AB@A@BA@@@@B@B@@A@@B@BA@@B@@AB@@@@@@@B@@A@@@@@@@@B@@@@A@@B@@@@@BA@@A@@A@@B@@@@@@ACBA@@@AB@AAA@@AA@A@@@@@@AAA@A@@@@@A@A@@A@@@@@B@@AA@@@@@B@@CA@B@A@@@@A@C@@@A@A@@@A@C@A@@@ABA@A@@@C@@@@B@@BB@@@@@@A@@@@BB@@@B@BB@@@@@@B@@@@@@@@@B@@@A@BB@@@@B@@@B@B@@@@@B@@@B@@@B@@@A@@@A@AB@@A@A@@@@@@@A@@@@@A@@@@@@@B@@@AA@@@@@@A@A@@@B@A@@@@AA@@B@@AA@@@B@@A@@A@@@@@@@@@@@A@@@@@@B@@@@@AAA@A@@@@B@@@BA@@@@@@A@@@BA@AB@@@@@@@AAA@@A@A@CA@@@@A@A@C@@@AC@@A@@A@@B@@A@@@AA@AAA@@@AB@@@@AA@@AB@@A@@B@@A@@@A@A@@@@A@@A@@@A@AA@@A@A@@@@@AA@@@A@@D@@A@@B@@@@A@@@A@@@A@@BA@BBACAA@ED@@A@@@@A@@@@@AA@@@@@@@A@BAA@BA@@@@@A@A@@@@@A@@@A@@A@E@AAA@A@@@@@A@CA@@@BAB@@@BA@AA@B@@@BA@@A@@A@@B@AC@@AABA@CAAAA@CA@@AAA@A@@A@@A@@@@@A@AB@@@@A@@@ABA@A@A@@B@@@B@@@@@B@@@BA@@@@@@@B@@@@@A@A@@@BB@@A@@@A@@B@@@@@@@BA@@@A@@@@B@@AA@@A@@B@@A@@@AAA@A@BBA@BBA@A@@@A@"
          ],
            "encodeOffsets": [
              [123585, 28652],
              [123691, 28457],
              [123529, 28528]
            ]
          }
        },
      //  {
      //   "type": "Feature",
      //   "id": "330302",
      //   "properties": {
      //     "name": "鹿城区",
      //     "cp": [120.655271, 28.015737],
      //     "childNum": 1
      //   },
      //   "geometry": {
      //     "type": "Polygon",
      //     "coordinates": ["@@CA@@@@@@A@@@@A@@AB@@@@A@@@@@A@@B@A@B@@@@A@@BA@@@@B@@BB@@@B@@A@@@AD@@CA@@EA@@ICEAGACAA@@ABA@@BC@@CABAA@AAB@AA@ABAC@@AA@@BA@BA@@CA@BAA@BA@@@@@@B@BA@@@@@@@@@@@A@@BAA@@@@A@@@A@@@@BAB@@A@ABA@AB@@@@BB@@@B@@B@@@B@@@BB@@@@A@A@@@BB@B@@@B@@@BA@@@@@@@A@CDAAAD@D@@AB@B@@B@B@@BABB@@@@B@@@@@B@@@@@@D@@@@BAD@@@D@@AD@BAB@B@B@@@BB@@BAA@B@D@@@@@D@@@B@@ABC@C@@A@A@AA@AA@A@@E@@@@@@@@@@@@@AA@@@@B@@@@@@@@A@AAACA@@ACAA@@@@@@A@B@A@@BCAA@A@@AA@A@@@@@@@EAAA@@AB@B@@@B@B@@A@@@ABABA@@@A@@@@B@@A@A@AAA@CB@@@@A@@@A@@AA@AA@@@@@BA@@A@B@@A@@A@@@@A@@@@@C@C@@@@@@B@@@@@@AB@@AAAB@AA@@@@@A@A@@@@@@@B@@B@@A@@@@@@@@@AB@@@@@@@BA@@A@@@A@@A@A@@@@@@@@A@@A@@@BDA@@@@B@@A@@@B@@BA@@@B@@BA@@@@B@@@B@@@@BBA@CB@BA@AB@@@@A@@B@@A@C@@@@@@@@@@BAA@@AB@@A@@A@@@@A@@@ABBB@@AB@@@BAB@B@@A@@B@B@@A@@BA@@@@BA@@@@@A@@B@B@@BBAB@BA@@BAB@@ABA@@@A@@@@B@@@B@B@@A@A@@@A@A@@@@BA@@@@@ACA@AAAA@@@AAAA@@@@@AB@B@@@@A@AA@@@@A@@@AAA@A@@@AAAAAAA@A@ABBA@@A@@@A@@AAA@BA@BB@@@@A@A@@@@A@@AA@B@B@@@@B@@@@B@@@BB@@BA@@@@@AB@A@@@@A@@@@@@AA@@@@@@@@@@@@@@B@@@@@@A@@@@@A@A@@@@A@@@@@B@@@@BB@@@@A@@@@B@@@@B@@@B@AB@@@@AA@@A@@@@@@B@@@@AA@@@@@B@@@@@@A@@@@@@DBB@@A@@@@B@B@@@@@B@@@@AAA@@@@B@@@AAA@@@@A@@A@@@AA@A@@A@@C@@@@@@@A@@@@@@@@A@@B@AA@@@@@@@@A@AB@@@@A@@@@@@@@A@@AB@@@@@@@@AAAAA@@AA@@@A@@BA@CAA@@BAB@@BBBB@B@B@BBB@@@BB@@@@@@B@@@@@@B@BB@@@BB@@@@B@@@AAB@@@AA@@B@@A@@@@@A@@BA@@@A@@@EBAA@BC@AB@B@@AA@@DAAA@@@@A@@@A@B@@BABAAA@@@AB@@AA@@@@AB@@A@@@C@@AA@@B@@AB@@C@@BA@@BA@@@@@@@@B@@@@@@AB@@@@A@@@@@@@@@@@AD@@@@AB@@B@@BAB@@A@A@@BA@@@@@A@@B@@B@@@@@B@@BC@@B@BA@@@@@A@A@@ABAA@B@A@@@@BA@@B@@@@AAA@AA@@A@@@@@@A@@@@CAAAA@@A@@@@@@@ACA@@@B@@@@@@AAA@@@@A@@@@A@B@A@@BAAAB@@@A@@@A@@A@@@@C@@@AA@AC@@A@@BABA@@@A@@@@B@@A@@@A@@@A@@@A@@@ABA@A@CA@@@@B@@B@@A@@@@@A@A@@@@A@@C@@@A@AAA@A@A@@@@@@@@B@B@@@BB@@@A@BBA@@B@@ABA@@@@@BB@AB@@@@@B@@BB@A@@@A@@@@@@B@@@@B@@@@@B@@B@@@@A@@@@B@@@B@B@BBB@B@@@B@@@B@@@B@BB@@@@B@@@@BB@@AB@B@@@B@@BB@@@@BB@@@@A@@@A@A@@@@@@B@B@@@BA@@B@B@BCB@@@@@BD@A@@BB@@@DBB@@B@@@@@@AB@@@@@AA@A@ABCB@@A@@A@@B@BA@AB@@A@@@@EA@@@B@@@B@@AD@@@@@@@@@A@A@@AA@@@@AA@@@@@@A@@@@@@A@@ABA@@AA@@@AB@@@B@@@@@@@@A@@@@@A@@@BBA@@@A@@AAB@@@@@B@@@@ABA@@B@@@@@@A@@@@DA@@A@@ABA@@@@B@@B@@@@BAA@B@AA@A@@@@@@@@BB@@B@@@BA@@@@@A@@@@BA@@@@B@@B@@@@@@@@B@@@@B@@@@B@@A@@@@@@B@B@@@@A@@@@@@@@@A@@B@B@@@@@B@@B@@B@@A@@@AA@AA@@@@@ABDH@@@@B@@BBB@@@B@@FD@@@BB@@BBB@@@@@@BBBB@@BBBB@@BB@@BD@@AB@@BB@B@BA@@@A@@@A@ABA@@BA@@@@@AB@@@@@B@BB@@@@BBB@@BB@@@B@B@BA@@@A@@@@@CB@@ABA@A@@@AB@BAB@B@@@@@B@@A@@@C@C@@@@@@@A@@@A@A@@@@@ADA@@B@@@@A@A@@A@@@B@@@B@@@@A@AAA@@B@@B@@@@B@@@@@@@B@@@@@@@@CBDBDBBDDB@@BB@@@@@@@@B@@B@@@@@@@@B@@B@@BB@@@@@@@@@B@@@@BBB@@@@@@@@A@@@@@@@@BA@@BA@@@@@@@@@@@@@@@@B@B@@@DBFBD@DBB@J@B@D@@@@@B@BAF@D@F@B@B@FBFBB@D@DAB@BABAFCDCBADEFIBADADCFCDAB@B@B@@@B@@B@B@BBBBFBBBBBBB@B@B@B@B@B@BAD@B@D@D@BAD@DCBABA@@@AB@FABAFABAFAF@B@@@F@FBD@B@HBDBDBHBLBBBF@B@F@D@D@D@B@DAD@FADCBABA@A@@@CACBE@A@A@A@A@A@A@IBIBGBA@@BAB@B@DAB@BBFBB@D@FBD@B@B@FADABABADA@ADE@ABCBA@CB@BGDE@C@ABABA@ABC@C@C@A@AAAACACAAAA@CAE@A@@@GBG@@BC@A@@@C@A@A@@@CBC@@@CBCDABADAHCBAB@B@BAHABAB@D@BBD@DBB@B@@@DBD@F@BBD@B@FBJ@B@D@B@B@BAB@@AD@@@B@@@B@BAB@N@J@D@B@B@D@@@B@F@D@FBB@F@F@HAF@JAB@H@NCHAFADAFCFCDBFBD@DBJBB@D@D@D@B@DAH@FAFAD@BANCLCJEB@@@@ADADEDE@@BC@ABE@ABCBABEBABEBA@AFCBABADAIECAECGAC@E@E@G@CBMBCBA@CBCD@@EDED@BCBABGDCBGG@@@@EBABCDCBADABAAAB@@@D@@ABAB@@@AAB@A@AA@AE@@GBACA@EBA@@@C@EBA@EI@@AEEI@AACA@@AAACB@@@@A@AB@@@@@AA@@@A@@@@A@@CC@@A@@B@@@@A@A@@B@B@B@@CACAAB@B@DA@"],
      //     "encodeOffsets": [
      //       [123585, 28652]
      //     ]
      //   }
      // }, {
      //   "type": "Feature",
      //   "id": "330303",
      //   "properties": {
      //     "name": "龙湾区",
      //     "cp": [120.811213, 27.932747],
      //     "childNum": 1
      //   },
      //   "geometry": {
      //     "type": "Polygon",
      //     "coordinates": ["@@ABEFKFIFABADABA@@@AB@@AB@@@@A@@B@BABC@@@@@A@@@A@@B@@A@@@A@ABMLCD@BBB@@@@A@EF@BA@@BA@@@@@@BA@@@@@@@@B@FADB@@BA@BB@@BB@@@@@@@B@@@@@@@@@B@@@B@@D@@@@B@B@BBDBBB@@@BD@@BB@@D@B@@B@D@BAB@BAB@@A@A@@B@@AD@B@@@B@B@@@BAB@B@BAB@@A@ADA@@@@@AA@@ABAB@@@@ABA@MF@@@@@@@BBB@@BB@BBA@@B@DA@B@@@@A@@@@BB@@@AB@@@@A@@@@B@@A@@@@@@@@@@BA@@@@@@@A@@BA@@@ABA@@@@BA@A@@@@@ABB@A@@B@@@@@@A@@BC@@@A@A@A@A@A@@B@@B@B@B@@@B@@@D@@@B@BBB@@@@AB@@BB@@@BA@@B@B@@@B@@AD@@@A@C@A@@@@@@@@@@@A@@@@@A@@@A@@@@@A@@@@@@@@@DA@@@@A@@@BADABAB@@AB@BABA@@@@BA@@BAB@@@@AB@@BB@BBB@@@@B@@A@@@@B@@B@DADADBB@@@AB@D@@AB@@@@B@B@@B@BAB@@E@AACBA@A@C@@B@@@B@@@B@@D@B@B@@@@@B@@D@BBB@B@BDB@@@B@@A@A@@@@B@BAB@B@@@B@@@@@@BB@B@B@B@BAB@@ABABA@A@A@@@@@@BAB@@@@@B@@A@@@@@@B@@@@B@@@@@@@@BA@B@B@@@@B@@@@@B@@@@B@BB@@@@A@ABCA@@@B@B@BAB@BB@@B@@@BA@@@@@@@@@D@B@@@@A@ABB@@@BB@@BDB@@B@@B@@BB@@AB@@@@A@@@@@AA@BA@@@@A@@A@@@@B@@@@BB@@@B@@@@@@@@B@@@B@@@@B@@B@@@@B@@@@@B@@@B@@A@@@@B@@AB@@A@A@@@@@@B@@@B@BB@@@@B@@@@@@A@A@@A@A@@CAA@C@A@@@ABABA@@@A@@@BB@@@@C@A@A@@B@@@@@@AA@@A@@@@@BBB@@BA@@@EC@@@@@@@@@BB@A@@BA@@@@@A@B@@@BB@@@@AB@@AAA@@B@@B@@B@@@@A@@B@@@@@B@@@@@@A@A@@BA@@@@@A@@@@@A@@B@@@@@@A@@@@@A@@@A@@@DB@@@B@@@B@@B@@@@@@BAB@@@@@BB@@@B@@@@@@@@B@@@@B@@B@@@@@@BD@@B@@@B@@B@B@@BD@@@B@@B@B@BB@@@B@BCBKD@@CBBFJABB@@@B@@@B@BBD@@CBC@@BBD@@C@A@CBA@C@G@C@@@@B@DB@A@A@@@AEA@FJBF@@FJB@FAD@@@B@FAB@BDHA@@BFB@@B@BBA@B@@BABA@@@C@@BABBBABCDADCBAFA@@@@HHDAHCBADA@AFCFC@@DCDAB@DANADAH@F@F@D@HBFDDBJF@@D@DCJCB@B@FAD@JCH@HBBOFGFARKB@BA@AHGDCFEBA@ADBB@B@@@DAFABABAD@FCB@B@B@@AB@D@DCDAD@DA@@@@z[VCBAZMNIpemRSBSUUUEEOO¥KGUYSUemIAQNUN"],
      //     "encodeOffsets": [
      //       [123691, 28457]
      //     ]
      //   }
      // },
      // {
      //   "type": "Feature",
      //   "id": "330304",
      //   "properties": {
      //     "name": "瓯海区",
      //     "cp": [120.61491, 27.966844],
      //     "childNum": 1
      //   },
      //   "geometry": {
      //     "type": "Polygon",
      //     "coordinates": ["@@A@@@A@@@AA@@A@@@@A@@AAA@A@@@AA@@@@@@@@@@@@@@A@@@@@@@@@A@@@@@@@@@@@AA@@@@@@@@@@@@@@@@@@A@@@@@@A@@@@@@@@A@@@@@@@@@@AA@@@@@@@@@@@@@@@@@@@@@@@@@A@@A@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@A@@@B@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@A@@@@A@@@@@@@@B@@@@@@@@A@@@@@@@@A@@@@@@@@@B@@@B@@@B@@BB@@@BB@@@@BABA@@BB@BB@@B@@@B@@@BB@@@@A@@@@B@@@@BB@@@@BBBB@B@@@@AB@B@@@@@BBB@@@B@BB@@BADA@@BA@@BAB@@@BA@@@A@@@@B@@@@A@@BA@A@AA@@A@A@@@@@@B@@@B@@@B@@@D@@B@@@B@@B@B@@@B@@@@B@@@B@@@@@B@B@@@@B@B@@@@@@A@C@@@@B@@@@@B@@@@A@@@@@A@@@A@@B@@@@A@@@A@A@@@@B@@A@@@@@@B@@@@A@@@@@@@@@ABB@A@@@@@@@AA@@@@@BA@@@@BAA@B@@@@@@A@@B@@@B@@@@@@@B@@A@@@@@@@@@@B@@@BC@@B@@@@@@@B@@@@@@@BA@@@A@@@@B@@B@@@@@@@@@B@@@@B@@@@B@AB@B@@@@CA@@A@@AAAA@@A@@@@@A@@@@@AA@@A@@@@@@A@@A@@A@A@@AA@@@A@@BA@C@A@AAA@@@@BA@@@@@@@A@@@AB@A@A@@B@@A@@@AA@@@@A@@A@A@@@@@@BAB@@@B@@B@@@@@B@A@@@@B@@@B@@A@AB@@@@A@@B@@@@@@@@@@A@ABAAA@@B@@A@A@@@@A@@AA@@@@A@@A@AA@@@@AA@@@A@@@AB@@A@A@@@@@@AB@B@@@@@@@@AAA@@@BAB@@@@@@@C@@@@@@@BA@@@@@@@@A@AAAAA@@AA@@AA@@A@@@A@@F@BA@@@@@A@BA@A@@@AA@@BA@@B@@B@@@@@@B@B@@@@@@@@A@@@CB@BA@AAA@A@@@A@ABAB@@A@A@A@A@@@@@BB@@B@@B@@CB@@EA@@@@@@@@DDD@@BB@@@B@B@@BB@@BCD@@@@C@CBA@@@A@A@@BABA@@@ABA@@BA@ABA@C@A@A@@@A@@@AAA@A@A@@@C@A@@@A@@@@@@B@@@B@@@B@@A@@B@@@B@@@B@@@@B@@B@@@BAB@@BBB@@BA@@B@@A@A@A@@@A@@@@BA@@@A@@B@@@BAB@@@@@@A@@@@BA@@@@BE@@@@@@@C@A@@@AAA@@@@B@@@@A@AB@A@BA@@@A@A@@@@@@@@@@@@@A@@@@@@@@@@@@@@AA@@@@@@@@@A@@@@@@@@@@@@@@@@A@@@@A@@@@@@@@@@@@B@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@@@@BA@@@@@@@@@@B@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@B@@@@B@B@@B@AB@@@@BB@@@@@B@@@BB@@B@@@B@B@@@DBB@@@@BDBB@@B@@@@@BA@@@@B@@B@@@@@@B@@B@D@@@BBB@@B@@@B@@@@A@ABC@@B@@@B@@AB@@@BB@B@@@BB@@@@@B@@@BBB@@@@@@A@@@AB@@@@@@A@AAA@@BA@@B@@A@A@@@@@@B@@B@@BAB@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@BB@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@B@@AB@BAB@AA@A@A@A@AAA@A@@@A@@@@B@@@@@@@BB@B@@BBBB@B@@@AB@B@B@B@@@AA@@AA@@AA@ACCA@@@@@@A@@B@@@@A@@@AA@@A@@@@@A@A@@@A@A@@@A@A@@A@@A@A@@BC@A@AB@@@@@@A@@@A@@@AA@@@B@@A@@B@@@@@B@@@BABA@A@@@@@@@A@ABA@@@@@A@@@@@@@@@A@AB@@@B@@@B@@@@A@ABAB@@@@@@A@@B@@AA@@@@AA@@@@@A@@@CA@@@@@@A@@@@A@@B@@@@AA@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@AA@@@@@@@@AA@@A@@@@@@@@@@@@@@@@@@@@@@@@@@@@@A@@@@B@@@@@@A@@@@@@@@@@@@@@@@@@B@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@C@@@@@@AB@AA@@@AA@@AA@@A@@@@A@@A@@AAAA@AA@@@@@@BA@@B@@AB@@@BA@@@A@A@@@C@@@@ACBAAC@AAA@ABA@@@A@A@@@@A@@@AAA@@A@@@A@@@A@@@@@@A@@@A@@B@B@@A@@B@AA@@@@@AB@@@@@@@BC@@@@@@A@@@A@ABA@@@@@@@@B@@@B@@A@A@@@@B@@@B@@@@@BA@@@@@@B@@A@@@A@ABA@@@@BA@@@@@ABA@@@A@ABA@AB@@@B@B@@@B@@@BC@@B@B@@A@@BAB@@A@AA@@@BAB@@AB@AA@@@A@@@A@ABAB@@@@CDC@A@@BA@@B@@@@AAA@A@A@AA@B@@A@AAAB@@A@@@CBA@A@@BA@A@@@@@A@A@A@@@C@@@C@A@A@@B@@@B@@@@@@A@@@A@A@@@@BA@@@A@ABAB@@A@A@@@C@@@A@CB@@@@@AAB@@@@A@A@@@@@A@A@@@@@A@@@A@@@@BAB@B@B@B@B@B@@BBBB@@BB@B@@BB@BB@@DBB@@B@@B@BBB@B@B@BBB@B@@@@@B@@@D@@BB@B@B@@B@@@@BB@B@@@B@@BB@@B@@BB@@A@@B@@@B@B@B@@@@@B@@ABBB@@@B@@@B@@BB@B@@@@A@@BA@@@@B@B@@@@@BA@@@@B@@A@@BC@@B@@@B@@BB@@@@@B@B@BB@B@@BB@@@@@@@ABAB@B@@BB@@BB@@@@@@BB@@B@D@B@B@@@BA@@B@@@BA@@@@B@B@@@BB@@B@@BB@@@B@B@BB@@B@@A@@@@@A@@D@BB@@DBBBB@@B@@BB@@@@@@@BBA@@B@@@@@B@@BB@ABAB@@AA@@@@CB@B@@@@BB@@@B@@@B@@@B@B@B@B@@AB@@@@AB@@@B@@CF@@B@@BC@AA@@@B@@AB@B@@A@@A@@AA@@@@@BABBB@@@BA@@A@@A@@@@B@B@@@BA@A@A@@@@B@@F@BBB@B@BB@@@@@BAB@B@B@@B@@B@@A@@@AB@@A@@A@@AA@@A@A@A@A@@B@@AB@@@@@B@B@B@B@@@B@@D@@@@BAB@@@BB@@@B@BABBB@@@@AB@@@@CBA@A@@BA@@@@@A@A@@B@@A@@@@FBB@@@B@@@@BB@@B@B@@@@B@BA@B@@@@AB@@@BB@B@@@B@@@B@@B@@A@@BBB@@A@B@@@@@B@@@B@@@@@BC@@@@BB@@B@@@@@B@@@B@@@@@@@B@@@@@@A@@@@B@@@@@@@B@@@@A@BB@@@B@@@@@B@@BB@@B@@B@@@@@@@@@@BB@BA@@@BA@@B@@@@B@@@@@@B@@B@B@@@@@BA@@@@@@@@BA@@@@B@@BBB@@B@@@@AA@@@@A@@@@@A@AB@@@@@@@@@B@@@@@@A@A@@@@B@@@@A@@A@@@@@@A@@@@@@A@@@@A@@B@@A@@B@@@@@B@@A@@@AA@@A@@@@@@B@B@@B@ABB@A@@A@@@@A@@B@BA@@@BB@@C@@B@@@@@@@@AB@BA@@@@@A@@@@BA@BB@@@B@AA@@B@@@@@B@@@@@@@@@@A@@BA@@B@@BB@BA@@@B@@@@B@@@@@@@BB@@@@BB@@@B@B@@@@@@@@BC@@@A@@@A@@FB@@@@@BA@@BABA@@@@BB@@@DABAB@B@@B@@@@BA@@@@@@@AA@CA@@A@@AB@C@@A@@@@DA@A@A@AB@@A@@@A@A@@@@B@B@@@B@@@@@AA@@@@AA@@@A@@@ABA@@AA@@@@@A@@A@@A@A@@@A@@@A@@@AAA@A@A@A@@@A@@B@@@@@@AA@@@@@A@@@@@@A@@@@B@@@B@A@@AA@@@@@A@@BAA@@@@B@BA@@@AB@AAB@@@A@@A@@@A@A@@@@@@B@B@B@BBB@@@D@@@@B@@B@B@@@@@B@@@@AA@@@@@DBB@B@BA@@B@@@B@@@B@@@B@@@@A@@B@@@B@BA@AB@@@BDB@@B@@@D@@B@@@@B@@@B@@BABB@AB@A@B@@@@@@B@@B@BB@@@@@@@A@@DB@B@@@@@@@BB@BBDB@@@@@B@@@@B@@@BBB@BB@@@@@AB@@A@@B@A@B@AB@BB@B@@@@@B@@A@AD@@AA@@@@@A@@@@AB@@@@@B@@AB@B@@@BA@AA@@@BA@@@@BC@@@@@@@@@@B@@@@@BA@@@@@@@A@@@@@@B@@AB@@AD@@@BA@@@AB@@BD@@@B@@@BA@@@@BB@@BA@@B@BBBA@AA@B@@@B@@@@@BBCB@@BB@@@ABAD@@ABBFA@@B@@@B@@AB@@@@@B@@@@AB@@B@@BA@B@@@A@@A@@A@@AAA@@@@@@@@A@@@@A@@A@@AA@A@A@AAAAA@@BA@AB@DBB@@AB@@@B@@BB@BBBB@@@@@@@@BA@@@B@@@@@@B@@@@@BAB@@@@@@@@@BBA@@@@B@@@@@@B@@@@@@@D@@@@BB@B@@B@@@BB@@@@@BB@B@@@A@@B@BB@@@@@A@@@@@A@A@@B@@@AA@C@@@@B@@@@@@@@A@@@@BB@@@@@A@@@@B@@@BB@@@@BAA@@@A@@@@@@A@@B@@@@@AA@@@@@A@@@@@B@@B@B@@@@@B@@@@@@@@A@@@@@@@@@@@@B@@B@@@@B@@@@@@BBA@@@@B@@AA@@A@@@A@@A@@@@@@A@ABB@@@B@@B@B@@@@@AAB@@ABB@BB@@@B@@@ABBAB@B@BBBBBB@@B@B@BB@@B@@@@@BBB@@@@@@ABA@@@@B@BB@B@@BBBBB@BD@@@@B@@A@@B@B@@@B@B@@@@A@A@@@A@@B@@@B@BA@@BA@AB@@ABAAA@@@A@AB@@@@@B@@A@@B@@AB@@@@A@AB@@@@ABA@A@@BA@@AABA@@B@@@@@@BB@@@BA@@BB@A@@@@@@@@D@B@@@@AB@@@@@BAB@@ADAB@AA@@@@@A@@@A@@B@@AA@@@B@@AA@@@B@@@@A@@B@AC@@B@@@@B@@@@@@B@B@@@@B@@@BB@@A@@@@@@BA@@@@@@@@B@@@@AA@@@@@@@B@B@@@@@B@@BBABB@@BA@@@@@@@A@@@@D@D@@@@@B@@@@@@BB@@@@A@BB@@A@@@@BBB@@BB@@@B@@@@@DAB@BBB@B@@@@A@@B@@@B@BABA@@B@@@@A@A@@@ABA@@BBFB@@@@@@B@B@@BB@B@DB@AB@A@B@@@@@@@BBBD@@DBBB@B@B@@@@@@A@@@@@BB@@@@@@@@@@@@F@@@@BBBB@@B@B@BD@D@BA@@@A@@@C@@@@@C@ABB@AA@@A@@@A@ABA@ABC@@@C@@BC@A@@C@@@@@@@@A@@@@@A@@A@BA@AA@A@@@@ABA@@@CBCBBDCB@@@@@@@B@@A@@@A@@@AAA@@B@B@@@@@AA@@A@@@A@@@@A@@AA@@@@BAB@BAB@@@BA@A@@B@@@B@@@@@BB@AB@@@@@@@@@@@B@@A@A@@@@B@@ABB@ADB@@ABB@@AB@@BD@AB@BBBA@BBB@ABDB@@AD@@AB@BB@DBHBFBJD@@FB@@DB@@BC@@B@@@@A@@AA@@@A@@B@@AB@@@@@@A@B@AB@@@@@B@@@@@BA@@@B@@B@@@@@@@DBB@@C@ABADBDB@@@A@A@AB@B@@@@@@AB@@@DD@@@B@@B@@@B@@B@@@@BAB@@@@@DABB@BB@BD@BB@BF@@B@B@A@@C@A@@D@H@D@B@DAB@D@@@AC@AD@DA@@AC@A@A@@@A@@AAIBAEDA@@LCDA@A@A@@AAA@A@@@@A@@AC@@@A@AA@@@A@@@AC@@@@@@@AA@@@@@@A@@@@@@A@@@A@@A@@@@BA@A@@@@A@@@@A@@@A@@CA@@B@@@B@@@@@B@@@@@@@@AB@@@@@B@@@@@B@@AB@B@@@@@@@@A@@@@@AB@@@@@@AA@@@@AB@BB@@BA@@@@AA@@A@B@@@@@B@@AB@A@@A@@@@@@@@FD@@B@@AA@AA@@@@B@@@BB@@@@@@@AB@B@D@@@@@AA@@B@@@B@BABA@@B@D@B@DB@@@B@BB@B@@@@@@@@A@@A@@A@A@@@A@@@@B@B@@@BA@@@A@@B@@@@A@@@A@@@@@A@@A@@@@A@@A@@@A@@@@@@@@@@A@@AA@@@@@A@@B@@@@B@@B@@ABB@@@@B@@@@@BA@@AA@@@AA@@@CA@AA@@A@@AA@B@B@@A@C@@@@@@@@@B@@A@@@AA@@ABA@A@A@A@@DBBAB@@@@@AAA@@@@@@A@@@@@A@@A@A@B@@A@@@@@@A@@@@@@A@@@@B@@@@A@@@@BA@A@@@@B@B@B@BABA@@BA@A@A@A@AAA@@@@@@@A@@@ABA@A@A@@B@B@@@@A@@CA@A@AAA@A@CA@@@@@A@A@C@@@@A@@@A@@@AD@B@B@DABBF@@@BA@A@AA@A@@@@@BA@@@CBA@@A@CACBCBA@@@@A@@B@@@@A@@A@AAA@@AA@@B@@A@AB@@AB@@@@ABABA@@BA@ABCBAB@@B@@@@@CB@@@@@@@@B@@@@@B@@@B@@@@@B@@@@@@@@@@@B@D@B@@@C@@BA@@@A@A@@@AB@@A@@AA@@B@@A@AAA@@@C@@@A@@@A@A@A@@@@AB@B@B@B@B@@@D@@AB@@@@@@@@AB@A@BA@@@@B@B@@A@@B@BA@@B@@AB@@@@@@@B@@A@@@@@@@@B@@@@A@@B@@@@@BA@@A@@A@@B@@@@@@ACBA@@@AB@AAA@@AA@A@@@@@@AAA@A@@@@@A@A@@A@@@@@B@@AA@@@@@B@@CA@B@A@@@@A@C@@@A@A@@@A@C@A@@@ABA@A@@@C@@@@B@@BB@@@@@@A@@@@BB@@@B@BB@@@@@@B@@@@@@@@@B@@@A@BB@@@@B@@@B@B@@@@@B@@@B@@@B@@@A@@@A@AB@@A@A@@@@@@@A@@@@@A@@@@@@@B@@@AA@@@@@@A@A@@@B@A@@@@AA@@B@@AA@@@B@@A@@A@@@@@@@@@@@A@@@@@@B@@@@@AAA@A@@@@B@@@BA@@@@@@A@@@BA@AB@@@@@@@AAA@@A@A@CA@@@@A@A@C@@@AC@@A@@A@@B@@A@@@AA@AAA@@@AB@@@@AA@@AB@@A@@B@@A@@@A@A@@@@A@@A@@@A@AA@@A@A@@@@@AA@@@A@@D@@A@@B@@@@A@@@A@@@A@@BA@BBACAA@ED@@A@@@@A@@@@@AA@@@@@@@A@BAA@BA@@@@@A@A@@@@@A@@@A@@A@E@AAA@A@@@@@A@CA@@@BAB@@@BA@AA@B@@@BA@@A@@A@@B@AC@@AABA@CAAAA@CA@@AAA@A@@A@@A@@@@@A@AB@@@@A@@@ABA@A@A@@B@@@B@@@@@B@@@BA@@@@@@@B@@@@@A@A@@@BB@@A@@@A@@B@@@@@@@BA@@@A@@@@B@@AA@@A@@B@@A@@@AAA@A@BBA@BBA@A@@@A@"],
      //     "encodeOffsets": [
      //       [123529, 28528]
      //     ]
      //   }
      // }, 
      {
        "type": "Feature",
        "id": "330327",
        "properties": {
          "name": "苍南县",
          "cp": [120.427619, 27.519773],
          "childNum": 10
        },
        "geometry": {
          "type": "MultiPolygon",
          "coordinates": [
            ["@@A@@@@@AB@@B@@@@@B@@@@A@@"],
            ["@@@@@@@A@@@@A@@@@@@B@@@@B@@@@@"],
            ["@@B@@@@A@@@@AA@@@BA@@@@@@B@@@B@@@@@B@@@@BA@@@@@@@@@@@A"],
            ["@@@@B@@@@A@@@@AA@@@@A@@@A@@@@@@B@@@@@BB@B@"],
            ["@@@@B@@B@@@@@@@@@AB@@@@@@@@A@@A@@@A@@AA@@B@@@@A@@@@@@@@@@@@@AB@@B@@@B@@@@@@@@@B@@@"],
            ["@@@@B@@@@@@@@A@@AA@@@@A@@@A@@@@@@B@@@B@@B@@@B@"],
            ["@@B@@@@@@A@@@A@A@@A@@@@@A@@@A@@B@@BB@@@BB@@@"],
            ["@@@@@@AA@@@@@B@@AA@@@@@@@@AB@@@AA@@@@@A@@@@AAB@@@@@@@BB@@@BBB@@@B@@@B@@@@@BA@@@@@@"],
            ["@@@@A@@BA@@@@@@AA@@@@@A@@@@BBB@BB@@@@@B@@@B@@@@A@@@A@@@A"],
            ["@@BBB@@BB@@@@B@@@B@B@BA@@B@@@@BBDBB@@B@BBB@@@BA@A@CBA@@B@@@B@@@BB@@@D@D@D@@@DA@@@BB@@B@@@BAB@@AB@B@@@BA@@D@@@@@@@BA@ABABA@ABA@A@@@ABA@AB@BA@@BA@@@@@@BA@@@@B@@AB@@AB@@@B@@@@@@@@B@D@FAF@D@DBB@B@B@@@B@B@@AFABCBA@ABC@CBA@ABC@AB@@@BA@@B@B@DBBBFDB@@BBB@B@@@B@B@@ABAB@BCD@BAD@BBD@@@BB@@BB@BBDBBBB@B@D@B@DAB@FA@@DA@@D@B@D@@@FBB@DDBBBB@@BB@@@@@@B@@B@@@@BBB@@BB@B@B@B@B@B@@@BABA@@@@DC@@@A@A@@BA@ABA@A@@@@@A@@BA@@@A@@BA@@BABA@@DA@@B@DA@@F@B@@BD@@@DBBBB@@@@@@@BB@@@@@B@@B@@@@@@@BB@@@@@@@@@@B@@@@B@@B@@@@@@@@@@@@@@B@@@@B@@@@@@@@@B@@@@@@B@@@@B@@@@@@@@@@@@@B@@@@B@@@@@@B@@@@@@@@@@@@@B@@@@@@@@@@@@BB@@@B@FBB@B@F@D@D@B@B@BAB@B@BADAFCFEB@BAFCBATKFCDABG@CB@BADCDCBCFKBCFKBCBCDEDIDEBCBABEB@BAFCF@L@FADABCBGBOFQHIDCLCHEBCBEAEAECIamKWEMAC@CD]@A@C@G@K@UCYEMIIQKMEOCICMCWGME[MSGOGGGEEAAAG@CBKBCBEBG@EACACCCCCAAECECKWCGCI@EDCZMLCDE@CAIEKOOKSCM@M@EAG@OCQEMGSECMKKGQEC@wKE@aJIDG@EAGHGLCDCFA@CFCBABC@C@A@AA@@ABABBB@DCFAB@@GDGDABAD@DBDBBADCB@BIDADAD@@IBG@@B@BDBBBAHGF@@AB@B@BDBDB@D@BA@C@C@A@@@A@@@@BA@@@B@BB@@DBB@BB@@@@@BA@@BAB@DDDDBBB@BBBBDDF@B@B@@ABCDABKFIHAFFHBBRLJ@FGHCJDDFBB@FA@EHGFCDEDABCBEDEFIP@@AL@HAF@BIHAB@@IFABEBAB@BABCDADAD@@AFCHGLABA@CBE@ABCBEDCBA@@BA@@B@DABCBABA@ADADBB@DBB@@BBBD@BAFA@CBGDCB@@ADAB@B@BBBBBB@@B@B@BAB@DDB@BDD@BBDDD@D@BADAFGHEDCDABCAEAGCE@A@MFA@@BBBDBBB@D@BABABA@@@CBAACA@A@A@E@@@@@A@@@A@@A@@A@@@@@@@A@@@@AA@@@ABA@A@A@@@@AA@@A@@@@@A@@@AB@@A@@@@@@@ABBBA@ACAAA@C@C@EDCBCBA@CBAAC@CACCACCA@@CA@@CAG@CBCHCFADCFABIJCF@@@FDFDDDB@F@J@HCFIFCBIFC@@@@B@@@@@@@@@@@B@@B@@@@@@BAB@@ABB@@@@@@BB@A@@@@@A@@B@AA@@@@@@B@@@@A@@B@B@@@B@@@@@B@B@@@@AA@AA@@@@B@AA@@@@@@B@@A@@A@@AB@@@@@@@@@B@@@@@B@@A@CB@@@@BB@@AB@@A@@@A@@@@BA@@@@B@@A@@@A@A@@@@@AAD@@A@@@@A@A@@@A@A@@@@@A@C@A@@@@@@@A@@@@@A@@@@B@@A@@@@B@@A@@@@@A@@B@@@B@@@@@@@@A@@@@@@A@@@@A@@@@@@AA@ABA@@@A@@B@@@B@@@@@B@@@@@@AB@@A@@@@@BB@@@BAA@@A@@@@@@B@@@@ABA@AAA@@B@@@@A@E@A@A@@@@@@A@@B@@@@@@A@@@@CA@@B@@ABA@ABC@@@@A@A@ABA@@@@BA@@@@B@B@BBB@@@@@@@B@@@@A@@@@@B@B@@@@@@BA@@@@@A@@@A@@BA@@BB@@@@B@@B@BB@@BB@@@@@@@@BB@@@@B@@BB@@BC@A@AB@A@@A@A@@A@@@@A@A@@@CB@@@@A@@@A@@@@@@@@B@@@@A@AB@@A@@B@@ABA@@@@B@BA@@@@@@B@@A@@A@@@A@AA@@@AA@@A@@BA@@@A@@@@BAB@@@B@@@@@@@@@@@@@@B@A@@B@@@@@@A@@@AA@@A@@D@@A@@@A@AA@@@@@@@@@ABAB@@A@@@A@@@@A@@A@@@@@A@@@@@BA@@@BBB@@B@@@@A@@A@@AB@A@@@@@@@@@@@AAB@@@@@@@A@@AA@A@@@@@@@@BB@@@@B@@A@@B@B@@@@@B@@@@@@A@@@@A@@@CA@@A@@@AB@@C@AB@@BB@@@B@@@BA@@@AB@B@@@@BBB@BBB@@B@@@@ABAB@B@BAB@@@B@@A@B@A@AB@@A@@@AB@@A@@@@@@@@BA@@@A@@B@@AB@@BB@@@@AB@@ABB@ABBD@@@B@@C@@@AA@@A@@@@AA@@@AB@@CAAB@@C@CAA@@@A@@@@A@BAB@@@B@@@D@@@@@BBB@@@@B@BB@@@@@BA@@@@@A@@B@@@@@B@@@@@B@@@@@@A@@@A@@@A@AAA@@BA@@AA@A@A@@@@@A@@@@@@@A@@@@@AA@@A@A@@@@@@@A@AB@@@@B@@BB@@BBD@@@@@B@@B@@DB@@B@BBB@@A@A@@@A@@@@@AB@@A@A@A@AB@@A@A@AA@@@AA@AA@@@@A@@@A@ABA@C@A@C@@@A@@@A@A@A@@@ABBB@BBB@BBB@@@@A@A@@@A@@@AA@@A@@@@@@@AB@@A@@B@@AA@@@@@@A@@@A@@B@@AB@B@@A@@B@@@@AA@@@@AA@@@@AB@DB@@@@@@BA@@@@B@B@@@@@@@@@B@@@BA@@@@@@@@B@@@@@@A@@@@@ABAB@@@B@@A@@@A@@@@B@@A@@@@AA@@B@@@DA@@@@@B@@@@B@@@@@@AB@@@@A@@@A@@@A@A@@AA@A@@B@@@@AAA@@@C@@@A@@@A@@@@@@B@BA@@@@AAB@AA@@@@@A@@BA@@AABAB@@AB@@A@@@AEA@@@@B@B@B@@@@@@@@@B@@@BAB@@@B@@BBBB@@B@@@BB@@@@@@AB@@ABB@BBBB@@@@AB@@@@@B@@@@@B@@@@A@@@@@@@@@@B@@@BA@@@ABBBBB@BB@B@@@B@B@B@@@B@@@B@@@@@@@B@BABB@@B@BABD@@@B@BB@@A@@BBBBB@B@@@B@B@@A@@B@@@@@@A@@@@@AB@@AB@@@BB@@@@@@@B@BB@@B@@B@B@B@@@@@BB@@B@@@B@@@AA@AA@@AAAB@@A@AB@@@BA@ABA@@@ABB@@AAA@@AA@AA@B@AA@@AA@B@@@B@@@@@@AB@@A@@B@@AB@@@B@@AB@@AB@B@@A@@B@@@@AB@@@@@@AB@@@@A@B@@B@@B@@@@@@@B@@B@@B@@DBBB@@@@D@@AB@B@B@@@B@B@@@BA@@B@@A@@D@@@@@@@@@@@@@@@@@@@@@@A@@B@@@@@@@A@@@@@@@BA@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@B@@@@@@@@@@@B@@@@@@@@@@@@@@@@AB@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@B@@@@@@A@@@@@@@@@@@@@@B@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@A@@@@@@@@@@B@@@@@@@@@@@@@B@@@@@@@B@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@AB@@@@@@@@@@@@B@@@@@@@@B@@@@@@@@@B@@@@@@@@@@@B@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@BB@@@@@@@@@@@@@BA@@@@@@@@@B@@@@@@@@B@@@@@@@@@@@@@@@B@@@@@@@@@@@B@@@@@@@@@@A@@@@@@B@@@@@@@@@@@@@B@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@BA@A@@@A@A@@BA@@@@@@@@AA@@@@@A@@AA@@@@B@@A@@@@@AA@@@BABA@AB@B@@ABA@@@@@@B@@@@@@@B@@BB@@@BA@@B@@@BAB@B@@B@@@@@@@A@@@A@@@@@@D@B@@@@BA@@@B@@BB@B@@@@A@@@@@@@@BA@@B@@AB@@@BA@@@@@@B@B@@A@@@@@@@@BAB@BA@@BB@@BB@@@@BB@@B@BB@@@@B@@@@@@@@B@@@@@BA@@@B@@BB@@@@@@B@@A@AB@@A@@BA@@@@@ABB@@@BA@@@@B@@@B@B@B@@@D@BB@@@@BB@@B@@BA@B@@B@@@AB@@@@@@@B@@@@@B@@@AABAB@B@@@D@@@@A@@B@@A@@@A@@@A@@@A@@@@@A@@@@@@@A@@@A@@A@@@BA@@@AB@B@BA@@B@B@@@B@@@B@@@B@B@B@@@B@@@B@@@@@B@@@B@BBB@B@@@B@DB@BB@@@@B@@@@@@BB@@BB@@B@@@B@B@@@B@@@@A@ABAB@@@B@BB@@@@@@B@@@B@@@AB@B@BA@B@@BA@@B@@@@B@@@@BA@@@AB@@B@@B@@BB@@@@@@@AB@@@B@@A@@@@@A@@@@BBBA@@BB@@BA@@@@B@@A@@BA@@@@@@B@@@@AB@@@BA@@@@@@@@@BB@@@@@B@@@@A@B@@@@@@B@@@@@@A@@@BB@B@@@B@B@@B@@B@@@@@B@@@@@B@BD@B@@BBB@@@@@BA@@@@@@BA@@B@BA@@BBBB@@@@@@BBB@B@@@B@@@B@B@@@B@B@B@@B@@@@BA@@@@@A@@@@@A@@BA@@@@@@@A@@@@@A@@@@@@BA@@@@@@@A@@B@@@@@@@B@B@@@@A@@B@@@B@B@@@@@@@B@@@B@@@@A@@@@@@BA@@@BBA@BB@@@BAB@@@@A@@@@B@@AB@@@B@B@B@@@@@@@B@@@@@B@@BB@BBB@FABA@@@@@@AB@B@@@B@BB@@BBA@BB@@B@@@@B@@@B@@@@A@@@@B@@BB@@@@@B@@@@@@BD@@@BB@@B@@@B@@@@@BB@@@@B@@B@BB@@@BB@BB@B@@@@B@@BBB@B@BB@BA@BB@@@@B@@B@@B@BB@@@@@B@@DD@@B@B@B@@@@B@@@@BB@B@@@B@@@@B@@@B@@@@A@@A@@@BA@@B@B@@BB@@@B@@@B@@@@@@AB@@@@@B@DCB@@@B@BB@@B@B@@@B@B@@@@@B@B@@B@@@B@@B@BB@@@@@@@@@@@@@@@@B@@@@@B@@@@@@B@@@@B@@@@@@@@@@@@@@B@@@@@@@@@@AB@BA@@@@@@BB@B@@B@@@@B@@@A@BB@ABB@@@AB@@@B@@@@@@@@A@A@@B@B@B@D@F@@@BB@@@BB@@B@@B@@@B@B@B@BA@B@@BD@@BBB@@@@@@@@B@@@@B@@@BB@@B@@@B@ABC@AB@@@B@@@@@B@@@@@@B@B@@@B@@@B@@@B@@@BA@@B@BB@@@B@@@@B@B@@@@@@B@A@@BBBBB@B@BABD@B@@@@BA@@B@B@BAB@B@@@BA@@BA@@@@@AA@A@A@@@@AFA@@B@D@B@@@B@BA@BD@@@B@A@BB@@BBFBB@@@B@@@@@ABB@B@@@BBBABB@@D@@@@@B@@@@@@BB@@@@@@@B@@@@@@A@@@BBA@@@@BA@@@@@@@@@@B@@@@A@@@@@@@@B@@A@@@@@@@@@A@@@@@@@@BC@BB@@E@A@AB@@BB@@A@@@@B@@A@@@@@@@@@@@@@A@A@ABB@@DB@ABA@A@@@A@@B@@BBB@BB@@@BBB@@@@@@@@@@A@@DAB@@@@@@@@@@@B@@C@@@@@@@@@@AA@@A@@@@@@A@@@@A@A@@AB@@A@@@AA@@@A@@@@A@@B@@A@@@A@@@@B@@ABB@@@@@@B@BB@@B@@@@A@@@@B@@@@@B@@@@@@AB@@@BBB@@A@@@@@@@@@@B@@@@@@A@@@@@@@@@A@BBA@@@@A@@@@@B@@@@@@A@@B@@@@@B@@@@@@@DB@@B@@@@@@@B@@@BB@@@@@@BA@@@B@@@B@@@@@@@@B@@@B@@@BBBA@B@@B@@@@@@@@@@@@@BB@A@B@A@@@@BBBBA@AB@@@BFD@@BBBBB@BA@@@@B@BA@@AA@@@A@@@@@AB@DA@@B@@BD@@@B@B@@@@BB@@@@@@@B@@A@@@@@@@@B@DA@@B@@@@@B@@B@@@@@AB@@@@@@@B@@A@A@@@A@@@@A@@A@@@@A@@AB@@@A@@A@@@@B@@@B@B@@AB@@@@BB@@@@@@@@@@@"]
          ],
          "encodeOffsets": [
            [
              [123589, 28168]
            ],
            [
              [123604, 28183]
            ],
            [
              [123738, 27693]
            ],
            [
              [123748, 27718]
            ],
            [
              [123604, 28187]
            ],
            [
              [123750, 27705]
            ],
            [
              [123759, 27713]
            ],
            [
              [123607, 28184]
            ],
            [
              [123736, 27691]
            ],
            [
              [123377, 28203]
            ]
          ]
        }
      }, {
        "type": "Feature",
        "id": "330326",
        "properties": {
          "name": "平阳县",
          "cp": [120.565793, 27.661918],
          "childNum": 13
        },
        "geometry": {
          "type": "MultiPolygon",
          "coordinates": [
            ["@@@@@@A@@@@@@@@@@@B@@@@@@@@@@@@@"],
            ["@@A@@@@B@@@@@@@@@@B@@@@@@B@@@A@@@@@@@@@@@A@@"],
            ["@@@@@@A@@@@@@@@@@@@@A@@BB@@@B@@@@@@@@@@@@A@@@@@@"],
            ["@@@@@@@@@@@@@AA@@@@B@@A@@@B@@@@B@@@@@@@@@@@@@@B@@@@@@@@@BAA@@@@@@@@@@@"],
            ["@@@A@@@@A@@@@@@@@@@@@@A@@@A@@@AB@@@@BB@@@B@@B@@@@@@A@@B@@@@@B@@A@@@@"],
            ["@@C@EBEB@BABA@@B@@B@F@D@BAB@BA@ABA@A@@"],
            ["@@@@@@@@@AA@@@@@A@@@@@@B@@@@A@@@A@@AABA@@@AB@@@@A@A@@B@@@B@@@@@@@BA@ABA@@@BBB@B@B@B@@@BA@@B@B@@@@@B@@@BA@@A@@@@@@@@A@@@@@@B@@@@@BAA@@@@@@@@A@@@@@@B@@@BA"],
            ["@@FAD@@A@C@ACAA@ABABA@A@A@ABAB@B@BB@@B@@B@@@BAB@B@"],
            ["@@GDGFADHDJADCDACECC"],
            ["@@FADC@C@ECAE@GHEDC@CF@BDBFAFAF@"],
            ["@@GDBD@DCBAFBBD@FAHCHCFEAAECG@E@"],
            ["@@HIDIAAIBIJED@BCDC@KHAB@DDDBBDBJCD@ADADAHAFBBH@FAFCJA@DIDADBBB@F@HEF@FADAFABABC@CDCBEFCF@D@D@DABAFGBACC@AHEFEAAE@KFIJCB@@A@@CA@C@GDQHWJA@AAACFE@A"],
            ["@@@@@A@@A@@AA@AA@@@@@@@@@@A@@A@@A@@BA@A@@@A@@@@@@BB@@@A@@BB@@@@@@BB@@@@@@B@@@B@BA@@@@@@@A@@B@@@@@AA@@@@@A@@@CBA@@@@@@@@@@BA@@@@@@@A@@A@@A@A@@@C@@AA@@@CBA@@B@@@@@B@@BB@@ABA@@@@@ABA@AAAA@@EC@A@@BAB@AAAA@@@@@B@A@BAA@@@@@@@@@@@@A@@@@AABAA@@A@@@A@@@@@@@@@@A@@@A@@AB@@@@@@AA@@A@@@@@@@A@@@CA@@@@@@A@@@@@A@@@@B@@@@A@@@@@B@@@@@AB@A@B@@@@@@@@@B@@@@A@@@@@@@@@@@@BA@AA@@A@@B@@@@A@@@@@A@@@@@@B@@A@@@AAA@@@@@@@AA@BA@@@@@@B@@@BA@@@@B@@B@@@B@@B@@@BA@@BB@B@@@@@@B@@@@B@@@BB@@@@@@@@@@@DA@@@@@@@@@@@A@CB@@@B@@@@@@@@A@AA@@A@@AAA@AA@@@@B@@@BAB@BCA@@AA@B@B@B@@@@@@@@@@@@@BA@@@@@@BA@@AA@@B@B@FA@@AAD@@@@@@@@@B@@@@@@@@@BA@@@@@@@@@@B@@A@@@@@@@@@@@AB@@@@AB@A@@@B@@@@A@@@@@@@A@@A@@@@A@@@@@C@@@AAABAA@@A@A@BA@@@@A@@@A@EAAA@@AAB@A@@@C@@AABA@@@A@C@A@@@EB@B@@B@B@B@@B@@@@AB@@AB@@A@A@ABA@A@@@AB@@@@@AACABA@A@AAAA@@@B@A@@@@A@A@@@@@@A@@AAA@@@AB@@A@@@A@@@A@@@A@A@@@@@@@@A@@@@@A@@BAD@BAA@@@A@@@AA@@A@@@@@@A@@@@@@A@AA@@AC@@@AABA@A@A@@@A@@@@AA@@A@@AA@@E@C@A@A@A@@@@B@B@@@@@@A@@@A@@B@@AA@BAAB@@@A@@@@@@AA@A@@A@@@@B@@ABA@@@@@@@@@@@A@@@@@@@@@@@@A@@@@@@A@@@@A@@@@@A@@@@@@@@@@@@@@@@@AAA@@@@A@@@AA@A@@@@@A@A@@@A@A@@@AAA@@@A@CDA@@@@@A@@B@@@@A@@@A@@@A@@AA@A@@@AB@@B@@@@B@@A@@@A@@@@@@A@@@AAA@@@@@A@@A@A@A@@@CC@@@A@@@@AAA@@@@AA@@@@@AAB@@AAAA@A@AA@@@A@@A@A@@AAA@@A@@A@AA@@@@@AA@@@@A@@@A@@@AA@@C@@A@@@@A@@@@@A@@AA@@@@@@B@@A@@@A@@@@@@AA@@AAB@AA@@A@A@@@ABA@@@@@@ABEBA@AAA@@AA@@@@@A@@@@@@@A@A@A@@@A@@BA@@@@@@B@@A@AB@@A@@AAB@A@@AB@@@@@@@B@@A@@@A@@@@@@@A@A@@@A@@@@B@@A@A@@@@@@@A@@@@B@@@@@@AB@@@@@@@B@@@@@B@@@@@@AB@@@B@@@@@B@@@@AB@@@@@AA@A@A@@@A@A@@@A@@@A@A@AA@@@@@@AAAA@@ABA@@@AB@@@@@@AB@@@@A@AA@@@AACA@@@@@A@@@@@A@@@@AA@A@@@A@A@@A@@@B@@@@A@@@@@@@@A@B@@A@@@@@A@@A@@@@@@@@AB@@A@@B@@A@@@@@@@AB@@@BA@@@@@AB@@AA@@ABAA@@@@@B@@@@@BA@@@A@@B@@@@@@AA@@@AA@@@BA@@B@@A@@A@@@@@@AB@@AA@B@@A@ABA@@A@@@A@@@@@@@AAA@@@A@AB@B@B@@A@@@A@A@@@A@@@AA@@AA@@@@@@@A@@A@@ACAA@@@A@A@AAA@@@A@@@@@A@@@A@@@A@A@A@@@A@@@A@@@A@A@@@ABA@A@@B@@AB@@B@@@@B@@@B@@@@@@@B@@@@@B@@@B@@@B@@@BA@@@@B@@C@@@A@A@ABBB@@A@@@@@A@@@@@@@A@@B@@@AA@B@@AA@@@AA@@@@AAC@@@A@A@A@@@A@@@@@AB@@A@BA@@@@B@@AB@@@BAB@@@@A@@@@A@@AA@@@B@@A@@@@@A@@@@@@A@@@@@AAA@@@AA@@@@AA@@AA@@ABA@AB@@@@@@@@@BA@A@@@@@@@AB@@A@@BA@@@AB@@@@@@@@@B@@A@A@@AA@@@B@@A@@A@C@@@@@@@@B@@@B@@@@@@@AA@A@AB@@A@@@AB@@A@@AA@@@@@@@A@@@@@@@AB@BA@A@@BABAB@@B@@B@@@@@BA@@@@@BB@@@B@@@@BB@@@@@@@@AB@@@B@B@@@BAB@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@A@@@@@@@@@@@@@A@@@@@@@@B@@@@@@@@A@@@@@@@@@@@A@@@@@@@@@@@@@@@A@@@@@@@@@@A@@@@@@@@AB@@@@@@@@@@@@A@@A@@@@@@@@@@@@@@@@A@@@@@@@@@@@A@@@@@@@@@@@A@@@@@@@@@A@@@@@@@@@@A@@@@@@@@@@A@@B@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@A@@@@@@@A@@@@@@@@@@@@@A@@@@@@@@@@@@B@@@@@@@@A@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@B@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@A@@B@@@@@@@@@@@@@@A@@@@@@@@@@@A@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@AB@@@@@@B@@@@@@@A@@@@B@@@@@@@@@@@@@@@@@@@@C@@@@BA@@@AB@@A@A@@@A@A@A@@BC@@@@@AACA@@@AA@@@@A@@@@@@@AA@@@@A@B@@A@@B@@@@A@@B@@A@@@@BA@A@@BA@@BA@@@A@@BA@@@@BA@@B@@@@A@@@A@B@@BB@@B@ABBB@@BB@BB@@AA@B@@AB@BAB@@A@@B@BA@BB@BB@@BBB@@A@@@A@@@AA@@@@A@A@A@@@@AA@@A@A@@@@@@AA@@A@@BA@@B@@@@@B@@@@A@@@@BA@A@@@A@A@AAAA@@@BA@@A@A@@ACABA@B@@BA@AB@@AB@@@BA@@H@@@B@@@@A@@@@@@B@A@B@@A@BB@@@@@@@@A@@@@B@@A@@BB@@@@@@B@B@@@B@@BB@@@@@A@A@A@@B@@@@@B@@A@@@@B@@B@@@@@BBB@@D@@@@@BA@@BAB@BA@@B@BB@@@@A@@@AB@@@@B@@@B@@@@@@@B@@B@@@@B@@A@@B@BA@@D@@@@@@@@@B@@@B@@@@@@@A@@B@@@@B@DA@@B@@B@@@@ADB@@B@BB@@@B@@@@BB@DBBB@@@@AB@B@@C@AB@@@@DB@B@@@@@B@@@@@@BB@@@B@@B@@@B@@@B@@@B@@@@@B@D@@@@BD@@@DB@BB@@@@@@@@BA@ABA@@@@@@@A@@@@BBB@B@@@@@BA@@@@@@B@@@@BAB@B@@@@@@ABABA@@@@B@@@@@@@B@B@@B@@B@B@@@@BB@@@ABABB@@@@B@@@@@BABAB@@@BBB@@@BA@@@@@AB@@@@ABABAB@@@B@@A@A@@@ABA@ABABA@A@@B@@@@@D@@@BA@@@@BB@@@@@@@@B@BB@@B@@BB@@@B@@@@AB@@@@ABAB@@BD@@@B@B@@BB@B@B@@@B@B@@@BA@@B@@@B@@AF@@B@B@B@@@BDB@@@@B@B@@B@@@B@@@BAB@@@B@@@B@B@@@@@BBB@B@B@@BB@@@A@@B@B@BBD@@@B@@B@BB@BBDA@@B@B@@A@@B@@AB@@A@@@A@A@@BA@@@@B@@@B@B@@@@@D@B@@AB@@@@BB@B@B@B@@B@@BB@@@@B@@B@@BBA@@@BB@@@BB@@@BB@B@@@@@@B@@AB@@@@@BB@BBBD@@A@@@@@@B@@@BBA@@@@@@@BB@@@@@B@@@B@@@BA@AB@@@@A@@DAB@@@BA@@@@AAB@BA@@BA@@B@BA@@B@BA@BB@@BBA@B@@BBB@@B@@@@BBB@@A@@DBB@B@B@@@B@B@@A@@B@@@BBB@@@@BDB@B@@BBB@@@@BB@BB@BB@@@@@BA@A@@@@AABA@@B@@@@@@A@@B@@@BA@@B@@A@@B@@@@@B@@@B@@@B@BABB@@B@@@B@@@B@B@B@BB@@BB@BB@@BB@@@@@D@DB@@@@@@@@@@@@@@@@@A@B@@B@@@@@@@@@@@@@@@@@@A@@@@@@@@@B@@@@B@@@@@@@@@@@@@@@@B@@@@@@@@@@@@B@@@@@@B@@B@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@B@@@@@@B@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@B@@B@@@@@@@@@@@@@@@@@@@@@@@BB@@@@@B@B@@@B@@@D@@C@@@@@@@@B@BB@A@A@@B@@@@@@@@BD@@BB@BB@@@@@B@@@@BB@B@@@@@@B@@@@B@@@@B@B@BBBAB@B@B@B@B@@@@AD@@@D@@BB@@B@@@BBB@@AB@@@@@B@B@@@BBBB@@B@@@B@@@BB@@B@@B@@BB@@@B@@@B@@@BB@@@BB@@@BB@@@@@B@@A@@B@@@@@B@@AB@@@@A@@B@@BB@@B@DBB@@@BB@@B@@@B@@@@@@@B@@@@B@@@@@@@B@@BB@@@BB@BD@B@@D@DBDA@@BB@@B@B@B@B@@@@A@A@A@@@A@AA@@@@@@@@A@@@A@@@@@@@@@@@@DABAB@BAB@@@B@@@@@@BB@@B@@@@B@@B@@@@@@BB@@BB@@@@@@@@@@@@B@@@B@@@@@@@B@@@@@@A@@BB@@BA@@B@B@B@@@B@@@@BAB@@@@A@BB@@@@@@@BB@B@@@B@@@B@@@@AB@@B@@B@A@@B@@@@B@@BBA@@@@B@@@@@B@@@@BBB@@B@@B@@@@@@B@@@@@B@@@@B@@A@A@@@@@ABABBB@@BBB@B@@@@@BABA@@@@BA@@@@B@@@@@@@@@@@@@@B@@ABB@@@@@B@@@@@@@@@@@@@@A@@@@@@@A@@B@@@BA@@B@B@@@@@@ABA@@DCB@@ADA@@@@@A@A@@BA@@@@@AB@B@@@@AB@B@@A@ABAB@@@BABBBA@@BA@@@@@@B@@@@B@@@BBB@@@@B@@@BB@B@@BB@@@@@BA@@@@BA@@@@@@B@@@@@@A@@@@@A@@@@B@@@@B@@@@@@@A@@@@B@@@@B@@@@@A@@B@@B@@@@@AB@B@@@@B@B@@BA@A@@BC@@B@B@@@B@@B@BBBAB@@@D@@ABA@B@@@BB@@@B@@@@B@@@@@@@@B@@B@@B@@@@@@@@A@@@@B@@@B@@@@BB@B@BB@@@@@B@@B@@@@@@@@@BB@B@B@@@@@@@B@@@@@@@@@B@@@@@@@@A@@@@@@B@@@@@@@BA@B@@B@@@@@@AB@@B@@@@BB@@BD@@@@AB@@@B@@ABABA@@@ABA@@@ABA@@@AB@BCB@BAB@B@@@BA@BB@@@@@BAA@B@@@@@BA@@@@@A@@@A@@@AA@@@BA@@B@@AB@@A@@@@@A@@@@@A@@B@@@@@DB@AD@@@B@@BB@B@B@@@@AB@@@@@@@@AB@@AA@@@@@@@BA@BB@@@B@B@@@@@@A@C@@B@B@B@B@B@@BB@@@B@@@D@DB@B@@@@@@BA@@@@BA@@D@BA@@BA@@B@B@B@@A@@B@BA@@BA@BBA@@B@@@B@@@@@@@@@@AB@@@B@@@@@@A@@@@A@@ABAB@@@@@BABCB@@@A@@A@@@@@A@@@@@A@A@@@@A@A@AA@B@@AA@A@AA@B@@@@AB@@@B@B@@@B@@@BA@@@@B@@@@@@A@@BA@@@@@@D@@A@A@@@A@@A@@AA@@@A@@ABA@@@@B@@@@@@@B@@A@@@@@@@@@@BB@@@@@@@@B@@@@@@A@@@@@A@@@@@@@@@A@@@AB@@@B@B@B@@A@@@@@C@@@A@@@@@@@AB@@@B@@@@AB@@A@ABA@@A@@A@@B@BAB@@@@@BAB@@@@@B@@B@@@@@AB@@@@@@@@CB@@@@B@@@B@@@@@@@@B@@@B@@@B@@@A@@B@@AB@@@@A@@@@BA@@@ABA@@@@B@@@@@BB@B@@@AB@@@@BB@@@@B@@@D@@@BA@@@@BB@@@@@@B@BABADAB@@@B@@@BD@@A@@B@B@BBBA@@B@BBAB@@@B@@@@A@@@@BA@@B@@AB@B@BCB@@@@@@@@B@B@@@@B@BA@@@@B@@@@@@@B@@@@@BAB@F@@@@@BA@@@A@B@A@@BABABA@@BAB@@@@@B@@@BA@@BA@@@@@A@@@B@A@@@@B@@@@@B@@A@@@@@@BA@@AA@@@A@@BA@@@@@@@@@@A@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@B@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@B@@@@B@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@BA@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@@@@@@AB@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@@@@@B@@@@@B@@@BBBBB@B@BB@@BBB@@AB@BBB@@@BBB@B@D@BB@@@@@B@@@B@B@@@@A@BB@@B@@@B@@@@AB@@@@@@@@@@@BB@@B@@@@@@@@@@DB@@@@@BB@@@AB@@B@@@B@@@@BB@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@BA@B@@@@@@@@@@@@@@@@@B@@@@@@@@@@@A@@@@B@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@A@@@@@@@@@A@@@@@@@@@@@@@A@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@B@@@@B@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@@@B@@@@@@@B@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@BB@@@@@@@A@@B@@@B@BB@@@@BB@@@ABAB@@@@@@@B@@A@@B@@B@@@BBBDA@AB@B@@@B@@@B@@@@@@@B@@@B@BAB@@BBBBAB@@B@@BB@@B@@@B@@@@@BB@@@@@BB@BB@@@@ABAB@@@@@@AB@@@@@D@@A@@@AB@@@@@B@@@@@B@@@@@BA@@@B@@@@BB@@@B@@@@@@@@@B@@@B@@@@@@@BB@@@@@@@@BB@@@@@@@B@B@B@@@B@B@BBB@B@@@BB@@@@@@B@@B@@@@@B@B@@@@@@@B@B@@@@@BB@@B@@@@@B@@BBBBB@@@@@BBB@@@@B@@@@BB@@ABAB@@@B@@@@BB@@@@@@BBDB@B@@@BB@BB@B@@@B@@@@@@B@@@@@@@@@@@@@@@@@@@@@B@@B@@@@@@@@@@@@BB@@@@@@@@@@@@@@@@A@@@@@@@@@@@B@@@@B@@@@@@@@@@@@A@@@@@@@@@@@BB@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@B@@B@@@B@@@@@@@@@@B@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@B@@@@B@@@@@@@@@@@B@@@@@@@@@@@@@B@@@@@@B@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@B@@B@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@BA@@@B@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@BB@@@@@@@@@@@@@@@B@@B@B@@@@@B@@B@@B@@BBA@B@@B@B@B@@@B@@@@@B@@A@@@@@A@@B@BB@@@@BBDAB@@@B@@@@@BA@@@A@@BABC@AB@@@B@@A@A@@@@@A@@BAB@@B@@@@BA@A@@B@@@BA@@@A@@@@AA@@@@BA@@@@B@@@@BDCB@@ABA@@@@@@@@@@@A@@@@@@B@@BB@ABBBBB@A@@BB@@@@BB@@@B@@@@@BB@@@@B@@B@@@@B@@BBD@@@@BB@@B@A@@B@@@@@@@@B@@BBB@@@B@@A@@@@@A@@BB@A@@@@B@B@@ABA@@@@@@BAB@BCBABCB@@@@AB@@A@@B@@ABBB@@@@@@@@@@A@ABC@@BAFE@@BA@A@@BA@@@ABA@@@@B@@@@@@A@@@@@@B@@AB@@@@ABA@@B@B@@@@@A@@A@@@A@@@AD@@@AA@@B@BA@@A@AEA@@CA@@B@@AA@@A@@@@@AA@@@@@C@A@@@C@@A@@@A@@@@@@A@B@@A@@@AABA@AA@@@@@@@@@@@A@@AAB@@@@@@A@@ABA@@BA@@@@A@@@AA@@@A@@AA@@@@@AB@@@@@@@B@@A@@@AA@@@@A@@BA@A@@@@@A@@@@B@B@B@@@@AB@@@@@B@@@@@B@@A@@@@@@@A@@B@B@@@@@@@@A@@@@@AB@@@@@@@@AD@@@@D@B@D@@B@D@FAB@@@@A@@@@@@@A@@B@B@DA@@@A@@@@F@B@@@@@B@@@@B@@@@@BA@@BAB@B@B@B@BB@DAD@B@@@@@B@B@@AB@@A@@B@B@@@@@B@D@B@@B@@D@B@@A@@B@@@@@B@@B@A@@B@AA@@D@BAAA@@@@@A@@B@B@B@@AA@B@@@DAB@HEB@@@BADADA@@DADC@@FA@AJEVMVBS{EUEMOUCEgeCCCCE@GCGAGCCGBUCBEDSLABEDABA@EFEDCBABA@A@ABA@A@C@C@E@A@A@EAA@@@A@@A@@@@@@@@@@A@@@@@@@@@@@@@A@@@@@@@@A@@A@@@@@@@@@@@@@A@@@@@@A@@@@A@@@@@@@@@A@@@@@@A@@@@@@@@@@@@A@@@@A@@A@@@@@@@@@@@AA@@@@@@A@@@@A@@@@AA@@@@@@A@AACA@@C@@AA@E@@@CBA@@@CB@@ABAB@@AB@@@B@@AB@@@B@@@@@BAB@BAB@@@B@B@@CD@@@@ABAB@@A@A@A@A@A@A@@AA@AA@@@@@AA@@@@@@@AA@@AAAACCA@EA@@C@A@C@@@CB@@EBA@CBA@C@A@A@AACAAAA@@AA@@A@@AC@ABC@ADC@ABABA@@@A@A@@@AAA@AA@ECAACAA@A@@@AB@@A@@BAD@BAB@DAD@BABADEB@BA@A@@@A@A@A@CAC@E@EBC@A@@@@@@@@@@A@@BA@@BA@@@A@@B@@A@@@@B@@AB@@ABAB@BA@@B@B@BAB@BABAB@@A@@@@@@@CB@@A@@@ABA@@BA@A@@@AA@@A@@CB@@C@C@C@@@A@@A@@@A@@@AB@DAB@B@@A@@AA@A@AA@CAAA@@@@@AB@@A@A@A"]
          ],
          "encodeOffsets": [
            [
              [123640, 28233]
            ],
            [
              [123652, 28244]
            ],
            [
              [123639, 28232]
            ],
            [
              [123633, 28224]
            ],
            [
              [123621, 28215]
            ],
            [
              [123973, 28139]
            ],
            [
              [123979, 28097]
            ],
            [
              [124038, 28132]
            ],
            [
              [124001, 28146]
            ],
            [
              [123992, 28091]
            ],
            [
              [124020, 28123]
            ],
            [
              [123972, 28114]
            ],
            [
              [123380, 28206]
            ]
          ]
        }
      }, {
        "type": "Feature",
        "id": "330324",
        "properties": {
          "name": "永嘉县",
          "cp": [120.692025, 28.153607],
          "childNum": 1
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": ["@@@A@@A@@@@@@@A@A@@@@@@@@A@@@AA@@@A@@@@AA@@@@@@@A@@@@@A@A@@ACAAA@@A@IFKDMDABC@EBEBG@CBA@C@C@C@A@IACAC@EACAEDEDCBEBGBMDG@A@IBE@GBE@E@A@EAC@E@A@@@C@A@A@C@I@M@A@ABA@@@A@@@C@@BA@ABA@A@C@A@I@EAA@C@AAE@C@CA@@A@A@CAC@AAC@A@ABGBABA@A@ABGDCBABCBAD@D@@AD@D@@@B@B@D@@@BAD@@AH@H@@@BBF@DBBBBBDBDBB@B@B@D@DAD@BABAB@B@DCFAHA@@DABAD@BCF@BCBABABCBEBA@A@C@EAC@A@EAAAA@CBA@A@AB@@ABAHAJ@J@B@B@B@B@B@BAFBD@D@@@BABABCDEBC@CBA@C@C@C@E@A@E@AAKAGACACAGAA@C@EAE@@@A@E@EBABEBABEBA@@B@@ABABCDC@ABC@C@A@C@ABA@A@A@A@A@A@AAAAAAAEAA@A@A@AA@@@A@A@A@CBEDCDCBABEJCFABCDEDABABA@CBC@A@EAEAA@A@E@C@E@ABA@DD@BBBB@@B@@A@@B@@CB@@@@@B@@@@@@@@@B@B@BAB@@A@A@A@@@@@@@@B@@ADAB@B@B@BB@@@@B@@@BA@@B@@@@@@BBB@B@@@@@BB@@@@@@B@@BB@@@@BB@@BB@@@BBB@B@B@B@@@BBD@@@B@@@@@BB@@@B@@@B@@@B@@AB@BAB@B@@@B@@@BBB@@@@@@@BA@@B@@@@@AAA@A@@A@@@@@@@A@@B@@@@@@@@A@BB@B@@@B@@A@A@@@@@@A@@@@@B@@A@@@@@@@@@B@@@@@AA@B@@@A@@@@@@@@@@@@A@@@@@@@@@AA@@@@@@@A@B@@@B@@@B@B@@@@@@@@@A@@@@C@@@@@B@@@CB@@ABA@@@@@@@@@A@A@@@@A@@AA@BA@@B@@@@AA@@@@@BBB@@@B@@@BA@@BB@@@@B@@A@@@@@@@@@@@BB@B@@B@@@@@@BB@B@B@@B@@@B@BA@BBAB@@A@AB@@BF@@A@@@@@@@@A@A@@ADA@@@@@A@@@A@BA@@AA@@@@@@@B@@@@@@@@A@@@@@@B@@@@@B@@A@@@A@@@A@@B@@@@@@@@@AA@@BA@@B@@@@@BB@@@B@@@B@B@B@@AB@@@B@@@@@BA@BDBB@BBB@@@@@AA@@@@@AAA@@B@@@@@@CDA@@@BB@@@AA@@B@@@@@@@@@@@@BB@B@@@@AB@AAB@@@@@@@@@B@B@@@@@@@@@@B@@A@@B@@@@@B@@@@@@@B@@@@@@@@@@BB@@B@@@A@@@@@@B@@B@@@@@A@@B@@B@BA@@@@@BA@@@@B@@@@@@@@B@@@@@@@@@BB@@@A@@@@@B@ABB@@A@@@@@@B@@@B@@@@@@@@@@B@@@@B@@@@@@@B@@@@@B@@@@@@B@@@@@@@AB@@@@@@B@@@BA@@@@@@B@@@@@@@B@@@@@@BB@B@@@BB@@@B@@@@@@A@@@@@@B@B@@B@@BB@B@@@BBBABB@@@B@@@BA@@BAB@B@B@@@BAB@B@@@B@@AB@@AB@@@@A@ABC@AAA@@BA@@@A@@@@@A@@BA@@@A@@@@B@@@@@B@B@@A@@B@@AB@@@@@B@@@B@@B@BB@@@BB@@@@B@D@@BBB@@@@@@B@@@B@BB@AB@B@@@B@@@B@@@@@B@B@B@@@@@BA@@@@@@BA@@BB@@B@@@B@@@@@@@@AB@@@@CA@B@@@B@@@@AB@BB@@@@B@@@@@B@@AB@@@@ADCB@@@B@B@@@BA@ABB@ABBB@B@@A@@DBB@@AB@@AB@@@B@@@B@@AB@B@@@@BB@@A@@BA@@@A@AB@ACDA@A@A@@@A@AB@@A@@@A@A@AB@@@B@@A@AB@@@BA@@BAB@@@@@@@BA@@@@@@@AB@@B@@BA@@BA@@@A@@@A@A@C@A@A@@@@@@@@@AB@BA@CAABAA@@A@@@A@CBABABA@AB@B@@@BB@@B@@@@A@@B@@A@@@@B@B@BBB@@@@@B@@@B@@@BA@@A@@@@@@@@A@@@@@AA@@@@@@A@BB@@@@A@@@A@A@@BA@@ACBA@AAA@@@AAEAA@AB@@ABA@@@@B@@A@@B@@CA@@@@A@@@@@@@@BA@@@@@@@A@@@@@A@@@@B@@AB@@@B@@B@@@B@BBB@B@@@@@B@@@@B@@@@B@@@A@B@@@@@B@DB@B@@@@B@@B@@@BDB@@BDB@@B@B@@AB@B@D@@@B@@@B@@@@A@@B@@@B@@@@BB@@BBB@@@BB@B@@@@@@@@A@A@@@@@@@AB@@@@A@@@AB@@@@A@@AC@A@@@@DB@@B@@BBB@BBB@A@@BABA@A@A@@@AB@BA@A@@@A@A@A@@@C@A@A@@@A@@@A@A@CBA@@@@B@@@BAB@@A@@AAB@@AA@B@B@BBB@@@B@@@B@BAB@@@B@@@B@@@B@@@B@B@@@@@BB@@@BBB@@@B@BBB@@@@BBB@@@@B@@B@@@B@B@@BBB@@@B@AB@B@@@@CBA@@@@@AA@@A@AB@BA@@@@BA@@@@@ABABA@@B@B@@@BA@@B@@@B@@B@@@@B@@@@@@@@@@AB@BA@@@@B@@@@@B@@@@B@@@@B@@@@@BB@B@@@B@BBB@B@@BB@@B@BB@AB@@@@A@@@@BA@@@@B@@@BB@@B@D@BAB@BB@@@@B@@@B@B@@@BB@@@@@B@@BBB@@@@B@@B@@B@@@BB@@@@@@@AB@@AB@BA@@B@BBBA@@B@@@@@BB@@BAB@B@@@@BB@@@B@@AB@@A@@@@@@B@@AB@@@B@@@B@@@@@@@BA@@@@@AB@@@B@@@@@B@@@B@@A@@@@@A@@@AAAAABA@@@A@@@@@@B@BA@@@@@@BC@@@@BA@@B@B@@@@A@@@A@@B@B@@@@CB@D@@B@@@@@@@B@@@B@@@B@@B@@B@B@@@@@B@@@B@@@@@BB@A@B@@@@BB@@B@@BB@@@B@@@B@@BBB@@BA@@B@@@BAB@@@@BB@@@@@B@@@B@@@B@B@@@B@@@DA@A@@B@@@BA@@@@B@@AB@@@B@@ABC@@@@BAB@@@@AB@@@@@B@@A@@BB@@@@B@@@B@@AB@@B@@B@@@@BB@@@@B@@B@@B@@@@B@@BB@@@@@BB@@@B@@B@@B@@B@@B@@@BB@@@@BA@@A@@A@@B@@B@@@@B@@@B@B@@@AB@BAB@@BB@B@B@@BB@@@@@B@@@B@@@@A@@B@@@B@@A@BB@@B@@B@@@@@@@B@B@@ABB@@@@B@@@B@B@@BBBB@BBA@@B@@@@A@A@@B@@A@@AA@@@@@A@@@@@A@@@@BA@@BAB@B@B@@@@ABAA@BA@@BC@@@AB@B@B@@@BB@B@@BBBB@B@@@@@BB@@B@@@@@@@B@@@B@@A@@@@@A@@@CB@B@@@DDB@B@BBBB@BA@@@@@@B@@@@@@@BA@@@@B@@@@@@@@@BA@@@A@@@@@@B@@@@@B@@@B@@@BBA@@@@B@@A@@@C@@B@B@@@@A@BB@@@@@B@@@B@@@B@@@@BB@@BA@@B@B@BB@@B@@D@@BA@BB@B@@@@@@@B@@B@@B@@B@@@@@BB@@@@@@@ABB@@@A@@BAA@BB@@B@@A@@@A@B@A@@B@@@@@B@@A@@@@@A@@B@BB@@@@@@B@@@@@@@B@@ABAB@@A@@@@@@B@BBB@@@@BA@@@@B@@@@B@@D@@@@B@@@B@@B@@B@@@@@BA@@@@@@@@BA@@@@B@@@@@@ABC@@@@@BBB@@@@@@@@B@@A@@BB@@@@AB@@B@@B@@@@BBBBB@BBA@@@B@@B@@@@@@@@B@@@@@B@@@B@ABB@@@@@B@@AB@@AB@@@B@@@B@@@B@@BA@@@@@DB@@@@@BA@@@@@@@@@B@@B@@@AB@@@BB@BB@@A@@@@@@BA@@@@@@@A@@@@B@@@@B@BB@@BA@@B@@@B@B@B@B@BB@@@BA@@B@@B@BD@B@@@F@@ADA@@B@@@B@@@BB@@B@@@B@@DD@@@BB@@B@@@B@@@@@BB@CB@B@BAB@@@@A@@B@@@@@@@BA@@@@@@@@B@B@B@B@@@@BB@@@@@BA@@BAB@@AB@B@@@@BB@@@A@@BC@A@B@A@BBB@@@@@AB@@@BB@@A@BB@@B@B@@B@@@@BB@B@@@@B@@@B@@@BA@@B@@@@@B@@@B@@@@@@D@B@@@B@BB@@B@B@@@B@@@B@@@@@B@@B@BBB@@BB@@@B@BAB@@@B@@@B@BB@@B@@@B@BBB@@@B@@@B@@@B@@@B@@@B@BB@@D@B@BA@@B@B@@B@@B@BB@@B@@ABB@AB@@AB@@@@@@A@@B@@@@A@@BAB@@@BA@@B@BA@@@@B@@@B@@@@F@@D@@B@@BADABAB@@@BA@@BA@BB@@@BA@@@@@@BA@@A@@@BA@@@@@A@@BA@@@@@A@AB@@@B@BA@CB@BC@AB@@@@@BAAA@@AA@@@@@AA@@@@@BA@ADA@@@@BABA@@@@B@@@B@@A@@@@B@@@@ABBBAD@BB@@BB@@@@B@@@@@@@@@DAB@BAB@@A@@@@B@@ABABA@@@B@@B@BB@@BBB@@@@@@A@@@C@@BA@@B@@@@A@ABA@@BAB@@A@@BB@@B@BA@@@@@@B@B@@@B@@AB@@AB@@@B@B@@@@AB@@ABAB@@A@AB@@A@@B@@A@@@@@AB@@AB@BABAA@@A@@B@B@@@B@B@@BB@B@BB@@B@@@@@B@B@@@@@BA@AB@B@@AAA@AB@@@B@@A@@@@@@B@BB@BB@BB@@B@@@@@BA@@D@@@@B@@@B@@BBBBB@@B@B@@B@@@B@B@@@B@B@@@@A@@BA@@@@@@B@BA@BBA@@@@@A@A@@B@BA@@BA@@B@B@B@@@@@BB@@@@BBBB@A@@B@@@D@@@B@@@B@@AB@@@@@B@ABB@@BB@B@B@@@B@@@@@B@BB@@B@@@@AB@@@@@@@B@@@@B@@@AB@@@@@B@B@@@@@BABBB@B@B@@@@@B@BBBAB@@@BAB@B@@@@@B@DB@@@@B@@A@BB@B@@@@@@B@@@BB@@@BBB@@@ABAB@@@@@B@D@@B@@@@B@@@@@B@@AB@@@@BF@@@@AB@@AB@BA@@@A@@@@B@@@B@BB@@@A@@@AB@@AB@B@B@@B@BBB@@@@@@@BB@B@BB@@@@@BB@@B@@@@BB@@BB@@@B@B@@A@@@@BA@@@A@@B@@@B@B@B@@@BA@@@A@@@ABB@A@@B@@AB@@@@B@BB@@@BBB@@B@@B@B@@@FB@@B@@B@@CB@@BB@@A@@@@@@B@D@@BBA@@@@BABCBB@@@AB@@A@@BA@@@ABABAB@@@@A@BB@@@@AB@@B@@BB@@ABBB@@@@@F@B@@B@B@@B@B@@@BBB@@BBB@@B@BB@@@@BA@@@@B@B@D@B@@AB@@AB@@A@@B@B@B@BA@@BAD@@@B@@@@BB@B@B@@@BB@@@@@B@@D@BAB@D@B@DBBAB@B@@@@@@@B@@BB@@@A@B@@@B@B@@@@B@B@@BB@@@B@@A@ABABA@@@BBB@@B@@B@@@@B@@BA@A@ABAB@B@@@@@B@@@BA@@DB@@@@BB@@AB@BBB@@B@@AB@@@BBB@A@@B@@@@@B@@@BBB@@@@@@EB@@@@@@@B@BBBB@@@@BB@@DBB@@A@AB@B@@@B@@@@@B@B@@B@B@@@B@B@@A@@@A@@@AB@BA@@BB@@@BB@@B@B@B@B@@ABAB@@@@B@@@@@B@B@@AB@@@BA@@@@B@B@BA@@@@B@@A@@B@@AB@@@BA@@@AB@B@B@@@@AB@@@B@B@BB@@B@@@@@B@@AB@BABB@@B@BB@@B@BB@@@@@BB@@@@@BB@@@B@@B@@@AB@B@@@@B@B@B@B@@@D@@@BBB@@@@@BA@@@@B@B@B@@@@@B@BA@@DA@A@@@A@@@A@@A@@@B@BABB@@B@@@B@@AB@B@@AB@@@AC@@@AA@@@BAA@@A@AA@@@@AB@@@@A@@@ABA@@BA@AA@@AA@@@B@@@B@B@@@@@B@@@B@@@BBB@@BB@B@B@B@B@B@BBB@@@@@@A@@BABA@@B@@AB@@@@@@@BA@@BA@@B@@@B@BB@@@@@B@@B@@@BB@@@AB@B@B@@AB@@@@@@A@@@@@AB@@A@A@A@@@@B@@@B@@@B@@A@@D@@@B@@@@A@@BBB@BBBB@B@@BB@@DB@@@@@@@@BA@@BA@@@A@A@A@@AA@@@@@@@@@A@A@@@A@@@A@BA@AC@A@@@@@A@@BABABAB@@A@@B@BBB@@A@AB@B@B@DAB@@@BAB@B@@@BBB@BABAB@@@BBB@DABAD@BABA@@@A@A@ABA@@@@@A@@@A@@@@@A@A@@@ABA@@B@@@BA@@BA@A@@@ABA@@B@BAB@@@BA@@A@@@B@@A@@BA@@@@@@@B@@@@@B@A@@B@@@B@@@@@@AB@@@@@@@@@@@BA@@@@@A@@@@@AB@@@@A@@@@@@@@AA@A@@A@@A@@@@@A@@@@A@@@@@AA@@@A@A@@@@A@@@@A@@@A@@@A@@@@A@@@@@@@@@A@@@@@A@@@A@@@@@@@@BA@@@@@@@AA@@@@@@@@@@@A@@@@A@@@@@@A@@@@@@@@@A@@@@@@B@B@@@B@@@@@A@@@@@@A@@@@@@@A@@A@@A@@@@@@@@@A@@@A@@@@@@@@@@@A@@@@@@A@@@B@@A@@@@@@@@@@@A@@@@@@@@@@@@@@B@@B@@@@@@@@@@@@@@BA@@@@@@@@@@@@B@@A@@BA@@@@@@@@@A@@@@B@@@@@@A@@@@B@@@@A@@@@@@@@B@@@B@B@BB@@@A@@@@@@B@@@@@@A@@@@@@@@B@@A@@@@@AB@B@BA@@FBB@BB@@B@@@D@@@@A@@B@@CB@DA@@@@@@@A@@@@B@BA@@@@@C@A@@@C@@AABA@EB@BC@@BABA@@D@@@@@BC@@BA@@@A@@@@B@@AD@D@B@BAB@@@@@@@@@B@BA@@@A@@B@@@@B@@B@@@B@@@@@BA@@BBB@BBB@@@@@BA@@@@D@@@@A@@AA@A@@D@@ABA@@@@B@@@D@DBBBB@B@@@@@B@B@BBD@@@FB@@B@B@BBB@BB@@@@@BBBBB@D@@DD@@@@FBBBBBDB@@@DDBBB@@@@D@@@BBB@B@DB@@@AB@B@B@B@@AB@B@B@@AB@@@@B@@@@BAB@BB@A@@D@DCB@@@BAB@BB@@B@@A@@@@@AB@@AB@B@@B@@@B@@B@@B@@@@BB@@@B@@@BA@@BC@@D@@@B@@BBB@B@BBB@B@@BB@@BBA@@@A@AB@@@@@@A@@@A@AAAAA@ABA@@AE@@@A@@@AA@A@@A@@@AAA@@BA@A@@B@BA@@@@B@@@@@@CBABA@A@ABA@@BA@@@A@@@@@AB@@A@@BAB@B@@BB@BAB@B@BA@@@A@@@@A@@@A@AC@@@B@@A@@AAAB@@@BAB@@@@ABA@@@B@@B@@@@C@A@@A@@CA@BA@@@AAA@@@@A@@A@@A@A@@@BA@A@@@@@@B@B@B@@@@@B@B@@@@@B@@@BB@@@@@AB@B@@@B@@A@A@A@A@E@@@@@@@A@AB@@A@@@A@@B@BC@@AAB@@A@@B@@A@AB@@A@@@A@@@@AA@@@@A@@@@@@@A@@@@@@C@@AA@@@AA@@@AA@AA@@@@@@BBB@@@@@@@BA@@A@@@@@B@@@@@AA@@@@@@@@B@@CA@A@@@@@A@AB@@@@AA@@A@@AB@@@@@@@@@@@@A@@@@@@@A@@B@@A@A@@@A@@@A@@@@@A@A@BAA@@@A@@@BA@@A@@A@@AA@@A@@@AA@@@C@AACA@@@@AA@@A@@A@B@@@@@@@BAB@A@@@A@@@A@@@@A@@@@@AA@B@@@BA@@DA@@B@B@@A@B@@B@@@@@@AB@@B@AB@@@@@@@B@@AAC@@@@AAA@@@@@@A@@@@AA@A@@@@@AA@@@A@@@@@AA@@@A@@B@B@@@@@AAA@A@@@@@@A@@BA@A@@@A@@@A@@@A@@B@BAB@@@@ABBB@@@@@@A@@B@BB@@@@B@@A@@B@B@@@BC@@@A@@@@@@B@@@B@@@BB@BB@B@@@B@BB@@@@BAB@@BB@B@B@BB@@@@BA@@@AB@@A@ABA@@@@@A@AA@@@A@A@@A@@BC@@A@@A@AA@@AA@AA@@AA@@A@@@@AB@@@@AB@BAB@@ABA@@@@A@@AA@AA@@@@A@A@A@AAA@AA@@@AA@A@A@@@@AA@@@@AAA@@A@@@@@AA@@AAAAA@@@A@A@@@A@A@A@@@@@@A@A@C@AAA@AAAA@@A@@@A@@B@B@B@@ABB@A@@@AB@@@B@@@@@B@@@B@@AB@B@@@@@@A@C@@@@@@@A@@@@@A@@@@B@@A@@AAA@@@@@@@@A@@@@@AA@A@@@@A@@A@@@@@@AA@@@@@A@@@@A@A@@@@@A@@A@AA@@A@@@A@@@@A@@DA@@@@@AA@A@A@A@@@@A@@@@BABA@@@@@AB@A@@@A@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@A@@@@@A@@@@@@@@@A@A@@@@@A@@@@@@@@@@@@@@@@BAA@@@@A@@@@@@B@@@A@@@@@@@@A@@BA@@BA@@@A@@@@@@AA@@@@A@BA@@AA@@@AA@@@@@A@@B@B@@@@@@AB@@@A@@AAA@@AA@@@A@@@@@@A@@@A@@@BB@@A@@@@@@AA@@BA@@@@@A@@@AAA@A@@@A@@@@@A@@@@@A@@@@A@@@@C@@B@@@@@AA@@B@@CAAAA@AAE@@@A@@B@B@B@@@@@@AB@@DDB@AF@@@@BB@@AB@@@BA@@@AB@@@@@@A@AB@@AB@@A@@@A@@@A@A@A@@@A@A@@BA@A@@@@@A@A@A@@A@@AAA@@@A@A@@@A@@@@@A@@@C@@@A@@@@@@AB@AA@@AAAACA@@@AA@AA@@@@AAA@@A@A@@@A@@@ABAB@@CA@A@@@@@A@@AA@A@A@@@@@A@@A@@@@@A@@A@@@A@@@@A@@BA@@B@@@@AA@AA@@@@@AB@@@@@@A@@@@@@B@@@@A@@DB@@B@@@DBBB@@DB@B@@@A@@@A@A@AAA@@@AB@@@@@@@@@@@B@@@@A@A@A@@@@B@BA@AD@BA@@@@@A@@@@B@BC@@B@@@BA@@DA@@@@AA@@@A@@BA@A@@@@A@@@@@AA@@AAB@AA@AAAA@@@@A@@A@@@@A@@B@@AB@@A@@@@@@@@@AB@@@@@AAA@@@@CA@@@B@BAB@@@@@BB@@@@B@B@B@B@B@B@@A@AA@@A@@A@@A@@@@@@@AA@@@@A@@@@@@@@@A@@@@@A@A@@@@@AA@@@@A@A@@@A@@B@@A@@@AB@AA@A@@AA@@@AA@@@@AD@BA@AB@@A@A@@@A@AA@@ABA@A@@@@BA@@@A@@@@AA@@@A@A@@AA@@@@AAAA@A@@B@@@@A@@AAA@A@@@A@C@@A@@AAA@AAAA@@@@@@@@A@@@AA@@A@@@@@A@A@A@@@@@A@@A@@@@C@@A@@A@@A@A@A@@@AB@@@@A@@@@@AA@@A@@A@@A@@@ABA@AB@@@BADBB@@@@@@BB@@@@@@@@B@@@@BB@@B@@BB@@@B@@@@@@A@@@@B@B@B@@B@A@@@@A@@@BC@@A@@@BA@@BB@@BB@@@@B@B@@@B@BA@@@@@A@@B@@BB@@@A@@@BBB@@@@@BB@@B@@AB@@A@@@AA@@A@@A@@@AAA@A@@A@@@@AC@@@@@AB@@A@@AAACB@@@@@@A@@BA@@AA@@@A@@@A@@@A@A@AA@@@A@B@@@@@B@@@AABABB@@@@@A@@@A@A@@@@A@@@@AA@AA@B@@A@@@AAA@@AA@A@@@A@@@A@@AA@@@@@A@@@A@CA@@@AA@A@C@AAA@@AA@A@@A@@@@@A@@@A@@@@@@@A@@@AA@@@@A@@@A@@@@@@@@@A@@@@@AB@@ABA@@A@@@AAA@ABA@@@AA@@@@B@@AB@@@@@@@@@A@@A@@@@A@@@@@A@@@@@@@A@@@@@@@@@A@A@@A@@@@@@AA@BA@@A@@@@@@@@A@@@@@@@@@@@@B@@@@A@@@A@@AA@AAA@CAA@@@@A@A@A@@B@DAB@@@D@BB@@@@B@B@@@@AA@@@BCB@@@AA@AA@@@@AA@C@@@@A@@@@@@AA@@@@@@@@B@@@AAA@@AB@B@@AB@@@@AA@AAA@@@@A@@A@@@@@AA@@A@@@@AA@@@@@@AB@@@AA@A@@A@CA@@AA@@AC@@@A@@@@@AAA@@@@@@A@@@C@@@A@A@@@@BA@@@@@A@A@@@AA@A@@AA@@A@AAA@AA@@@A@@B@@@B@BA@@@A@@@@AA@A@@A@@@A@@A@@B@@@BA@@B@B@@A@@AC@@@@C@A@AAAAA@@@@AA@@@A@@A@ADAB@@AA@@AB@@AA@AA@@A@@AA@B@AAAA@@BA@@@A@@@@@@B@@@@@@@A@@A@@@@@@B@@@@A@@A@@@@A@A@A@A@@BA@A@AA@@B@@@@A@@ACA@@@AA@A@@@@@A@@@@@A@@@A@@AA@@@@A@@@@@@@A@@@@@AA@@@@@AA@@AA@A@@A@AA@@@@@A@@@@@@AA@@@@@@@A@@BA@@@@@A@BA@@@@@A@BA@@@@AAB@AA@AB@@@@@@A@@@@@AA@@@@@AA@@A@A@@AB@@@B@B@@AA@@@@@A@@@@@@@B@@A@@C@@A@@@@@@@@BA@@A@A@@A@@A@@@AA@@@A@@@A@@@@@A@@@A@@A@A@@A@@A@@A@@BA@@@AB@@AA@AAAB@@@A@@@A@@@@@A@@@@@A@A@@BA@@@@@@@ABAB@@A@AAA@AB@@BB@@@@@B@@@B@@B@@@@@@@@@@@BA@@@@@@B@@@@@B@@@BB@@B@@@@@@@@@A@A@@@A@@B@@A@@B@@@@@BB@@@@B@@@B@B@B@BA@@@@BA@AB@@B@@@@@@@@B@@A@@B@B@B@@ABA@@@AA@@@E@@@ABA@@@A@A@AA@@C@A@@@AAA@@@AAAA@@A@AB@@A@@@B@@A@@A@@@B@@A@@@@B@@@A@@@@AB@@@BB@@@@@A@A@@@@@@B@@@@@@A@@@A@AA@@@@BA@@A@@BA@A@A@@@A@A@@A@@C@AD@@@@A@@@@@AA@@@@BA@@@AA@@AA@A@@D@@@B@@@@@@A@@@@C@@@@@@AB@@@A@@@@@A@@A@@@A@@@@@@BA@@@@A@@A@BA@@BAB@B@@AA@@@A@A@@AA@@C@@@@A@@@@BA@@BA@@@AA@AA@@@@@@@A@@@@@A@@A@@@@A@@BA@@@@@@AA@A@@A@@@A@BAA@@@@@@@@@@AA@@@@A@@B@@@@AB@@@B@B@@@@A@AA@@@A@A@@@@@A@@@@A@@A@@@@@A@@@@@@@@B@B@@A@@@@A@A@@@@@A@@@A@@@A@@@AA@@@DA@@A@B@AA@@@@"],
          "encodeOffsets": [
            [123697, 28692]
          ]
        }
      }, {
        "type": "Feature",
        "id": "330328",
        "properties": {
          "name": "文成县",
          "cp": [120.091498, 27.786996],
          "childNum": 1
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": ["@@B@@@@@@@@@AAB@@@@A@B@A@@@@B@@@@@@A@@@GB@@A@@BA@@BAB@@AA@@@AAABA@@@@@@@A@@@A@@@A@A@A@@@A@A@@@@BA@A@@@ABA@@@@@@@A@A@AB@@A@@@@@CBA@@B@@@@@@@@@@A@A@@@A@@@@B@@@@@@AB@A@@AB@@@D@@A@@@A@A@CB@@AB@@@@BB@B@BBB@BA@@@@B@@BB@B@B@@@BA@@@BB@@A@@BA@AB@@@@E@@@AAC@@@AA@@@@C@@@@@@@@@A@@@@@A@@@@@@@@@AA@@@@@@A@@@@@A@@@@@@BA@A@@@B@@BB@@@@BA@@@@AA@@@A@@@@@@BAA@@A@@BA@@B@@@@@@@@@BB@@@@@@@ABC@AB@@A@@@A@@@@BB@@@ABA@@@@A@@A@@@@@A@@@@B@@@@@@@BA@@@@A@@@A@@@@A@@@A@AB@B@@A@BBA@BB@B@@BB@@@@@B@@@B@@@B@BBD@@@B@@BBBBBBBD@B@@A@@B@B@@AB@@C@A@AB@@C@@@@B@B@@@@A@@B@AA@@@@A@@A@A@@BA@@BBABB@@BB@@B@@@@@C@@@A@AB@@@@@B@@B@@@B@@BA@@@@@A@C@A@A@@@BABA@@@@@@AA@AAB@BA@@BA@@@@@@@@@ABA@@@@@A@@B@@A@A@@B@@@BA@ABGB@@ABC@@@A@@@@A@A@@@@AB@@@@@@A@AA@BB@@@@BAA@@@@A@@@BB@@@BA@@@@@A@@@@B@@@B@@@B@BA@@@@B@@@@B@@B@B@@B@B@@@@@@B@B@@@@@B@@@@@B@@@BB@@B@@@B@@@@A@A@BB@@@B@@A@@@@@@B@@B@@@B@B@@@B@B@@@@BC@CA@@C@@B@@B@@BB@@B@@@@@@@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@BA@@@@@@@@@@@@@@@@@@@@@@BB@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@B@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@B@@@@B@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@A@@@@@B@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@BB@@@@@@@@@@@@@@@@@@@@@@@@@@@@@B@@B@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@B@@@@@@B@@@@@@@@@@@@@@@@@@@@@@B@@B@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@B@@A@@@@@@@@@@@@@@@AB@@@@@@@@@@@@@@@@@@@@B@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@A@@@@@@@@B@B@@@@@@B@@B@@@B@@@B@@@@@@@B@@A@@@@@@@B@@@BB@@@@@@@B@@A@AA@B@@BB@@A@@@A@@@@@AAA@@@A@@@@@@@AD@@@BB@BB@@B@B@B@@@AA@@B@@@DB@B@B@@@@@BAA@B@@@@@B@@@@AAA@@@A@@@@BB@@B@@A@A@@@@AA@@AAA@@@@@@@DB@@@AB@BA@@@A@AB@@@B@@AB@BBBBBBB@B@B@B@@CD@@A@@@EBA@A@ABED@@ABA@@BA@A@A@A@A@CA@@AA@A@A@AAAAA@@BC@AB@@@@AAAAA@A@@@A@@CB@@AAAAA@@@@@ABA@A@@@@@ABA@@@AAA@A@@AA@@@@@A@GAC@A@CCGDC@@BAD@BA@@B@@A@@@A@AB@BC@@@C@AA@@AAA@AA@@@A@A@A@@AC@AA@@@C@@B@B@@@B@@BB@D@@@@@@@BABA@A@@@A@@BA@@@@@AAA@AA@@@AAB@AA@A@@@A@A@A@@A@@@@BA@@@@B@@@@A@@B@@@@AAABA@@@AD@@@B@@BBABBB@@A@@@@CAAAA@CA@@CA@AAA@C@@@A@@A@A@@@@BAB@@AB@@C@A@@@A@AA@@@A@@A@@@A@@@AB@@A@AB@@@@A@@B@@@@@@AB@@@A@@C@@@@B@@@@@B@@B@@@@B@@A@AA@@ABA@@@@BAB@B@BAB@@A@A@AB@B@@@BBB@B@@A@@B@@@@AB@B@@@@@B@@AB@@@@A@A@@@@BAB@@@@@BA@@B@B@@@@@@@B@@@B@@B@@@@B@@A@@B@@@BB@@A@@BB@@BB@B@@@@@B@B@@@@@@@@C@AB@@@AAB@@BB@B@@@B@BB@@@@@@B@@AB@@@@B@@BB@@@@D@B@@@BB@@@@B@@@@@B@@@B@BA@@B@@ABA@A@@@A@@@CA@A@@AB@B@@A@@@ABADA@ABBB@@BD@@@@AB@B@@A@@B@@AAA@ADA@@BA@@@A@@BA@AB@@@@@@C@@AA@A@@@@@AB@B@@AB@@@@@@@B@BA@AB@@@@@@@BA@@B@@@BA@@B@BA@@@A@@@@@ABA@A@@@A@@@@@A@@@A@@B@@@@ABA@@B@@@BA@A@@@@@A@C@ABA@A@AB@B@@@@@@@@@@@B@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@B@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@B@@@@@@@@BB@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@@@@@@@B@@B@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@A@@@@@@@@@@@@@@@B@@@@@@@@B@@@@@@A@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@A@@@@@@@@@@@@@@@@@@@B@@@@B@@@@@@@@@@@@@@@@@@@@A@@@@@@@@B@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@@@@A@@B@@@@@@@@@@B@@@A@@@@@@@@@@@@@@@@@@@@@@@@B@@A@@@@@@@@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@B@@@@@@B@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@B@@@@@@@@A@@@@@@@@@@@@@@@@@@B@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@@@@B@@@@@@A@@@@@@@@@@@@B@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@A@A@@@@@A@A@@@A@@BA@AB@@A@A@AAA@@@@@@BA@@@@BA@@BA@@@A@@@A@@@AB@@@@@@C@@@A@@AABA@A@A@CAA@A@@AA@AAA@AA@@@A@@@A@A@@AA@@A@@C@AAA@@@A@@@AAAA@@AAA@A@@AAAA@@@A@@@A@A@AAA@@@@@B@BA@AB@B@B@B@B@B@@@B@B@BA@@@A@ABA@AB@@@BBFBDA@@B@@A@@B@B@BB@D@@B@@BB@@ABABABA@@BA@@BBDABBBA@@BBD@@@@@@@B@BBBB@@@@@BB@@@@B@BB@B@@BA@@BBB@@B@@B@@@@B@@@@@B@B@@@@A@@@E@@@@BA@A@@@ABAB@B@B@B@@@@@@@B@@@@@B@B@B@@BB@@@@A@@@@B@B@@@B@@@B@@@@@@@@AB@@@@BBA@@B@@@BB@@@BB@@@B@@B@@BBB@@@BBB@@@B@@@@@BA@@BABCB@B@@@DA@@@@B@@BB@@B@@BB@@@@@BBBB@@B@BB@B@@@@@@@B@DBB@@BB@BB@@B@@B@@@@@BD@BBBA@B@@B@@@B@BB@@@@B@@A@@@BB@@BBBA@@@@B@BC@@B@@@B@@@@@@@@@AB@@@@@@@@A@@BA@BB@B@B@@ABAB@BA@@B@BA@@B@BAB@@AD@B@B@B@@AAA@A@AAAB@B@@A@@@A@@@A@C@@B@B@BBD@BB@@@@@@BB@@@A@A@@B@@@@@@@@BB@@@@@B@@@B@BB@@@@@@@@BB@@B@@B@@@@@B@@@@@@B@@@@BB@@@BB@@@B@@@B@B@@@B@@BBBBB@@@BB@@@@B@@@BB@@B@BB@B@@@BB@@@@@@@@@@B@B@@AB@@ABAB@@@BAB@DA@@@@@@BA@@B@@A@@@@B@@@@@@@@A@@@@@@B@@@@A@@B@@@B@@A@@B@@@@A@A@@@@B@@@@@B@DA@@@@B@@BB@@@DA@@@@@@BAB@@@BA@@DB@@@AB@@@B@@@@B@@@@A@@@BB@@A@B@@B@@@BAB@@BB@@BB@@@@@B@@@@BB@B@@@@@@@BB@BB@@@@B@@B@@@@@B@@@B@@B@@@@@@BB@@@@B@@B@@@ABB@@@@@B@@BBBB@B@B@@@@@@@B@@@B@@@B@BD@@BB@@@@@B@@A@@@AB@@AB@BA@A@@@ABABEB@BA@@BA@@@@@A@@BA@@@@B@B@B@@@BA@@@@A@AA@@@AB@BA@AB@A@@@@@@ABADAB@B@@A@ABA@@@@@@BBA@@B@@@@@BB@B@@ABB@@B@@@@@A@@@A@@BA@@BC@AB@BB@@@B@@@@@B@@@@@@@BB@@@BB@@BB@A@@@@@@@BB@BAB@D@@@AB@@A@@BAB@@@BB@@@B@D@@@@@BBBB@@B@B@@A@@B@D@@@B@BB@@DB@@BC@@BA@A@A@@BA@@B@BA@ADA@A@C@A@@BA@@B@B@@B@@B@@@@@BB@@@B@@B@@@ABABA@@A@@AB@B@B@B@@@B@B@@DBBB@@@@@B@@@@@@A@@B@@A@@BB@@@@B@B@@BB@B@@D@@ABB@@@@@B@@@DB@@BB@BCBABA@B@@@@BB@@@B@BB@@B@BB@@@@@@C@@B@@CBA@@@@@@B@@@B@AAB@@@@AB@BCB@@@@A@@@@BA@@@A@@@@BCBA@@BA@@B@BE@@@@@AB@@ABA@@@A@@B@@@@@BDB@@@@@@@@@B@@@DB@B@@@@B@@@@@D@@@BA@@@@D@@BB@@@B@B@DAB@BB@@DB@@BB@@@B@@@@@@B@@@@BBBBBBBBB@@BBB@@BB@BAB@@@B@@@BB@@BD@B@@@@AB@A@B@B@@B@BB@@@@D@@@B@@AB@@@BB@@B@B@@@BBB@BB@BB@@@@@B@DAB@BB@A@@BB@@B@@B@@@BFC@@@@@@DA@@@@@@B@@@@BDB@@BB@@@AB@@@@@B@@A@@@@B@@B@@@@@@@@BA@@B@@@BB@@@BB@@B@B@@B@B@BC@A@@@A@@B@@A@@@@BAB@@@@A@@@AAA@@FAB@@A@@@A@A@@A@@@@AA@@@BE@@@@A@AA@@@A@A@AB@@@@@AAAA@@@@@@AA@@@@@@AAB@@@@A@@@A@@@@CAAA@AAA@@A@@@@@B@@AB@B@@@@@BA@A@@@@@@@A@@B@@@@@@@@@@A@@A@@AB@@@BA@@BA@@@@@@@@AA@AB@@@@B@@BB@@@@B@@@@@@A@B@@@@@@@@D@@B@ABB@@BA@B@@DA@@@B@@@@B@@A@@BB@@@@@@@A@@@@@@B@@@@@@@@@@@@@@BB@@@@A@@@@@@@@@@B@@@@@@@@B@@@@B@@@@A@@@A@@@@@@@@@@@B@B@@B@@@@@@A@@@@@@@@@@@B@@BB@@@@@A@@B@@@@@@@@A@@@@@@@BB@A@@@@@@B@@BB@A@@@A@@@@B@@A@B@@@@@@@@@B@@@@BA@@@@@@@B@@@@@@@A@B@@@@@B@@B@@@@A@@@@B@@A@@@ABBB@B@BADBB@@@B@BB@@@@B@B@B@@@DBB@@@BBB@B@@@@@B@@@@@@@@BB@@@@@@B@@@@AB@@@@A@@B@@@@B@@B@@@@ABB@@BB@@@@@B@@A@@@A@@B@BB@@@A@@@@BA@@@@@@AAB@@A@@@@B@@@B@@@@A@@B@BA@@BAAAB@@@@AB@@@B@@A@@B@B@B@B@@@@@D@BB@@@@@AB@@@@@@@D@BB@@@@B@@B@@@@@B@@D@@@B@@B@@B@B@@@@B@@@@BB@@AB@@A@@BAB@@@@BB@@@AD@B@@@B@@@@@B@B@@BB@B@@B@@@@@BB@@@A@@@@B@@B@@A@@@@B@@@@@@BB@@@@@@@B@@@AB@@BB@A@A@@@A@@B@@@@A@@@@B@@@@@B@BA@@@@B@@@@BB@@@A@@@BB@@B@@@@B@@B@@@@A@@A@@@@A@@@@@@B@B@@@D@@@B@@@B@B@@BB@@BB@@BBB@AB@@@@@@@B@@@@@@A@@B@@A@@@@BB@@B@@@BB@@@B@@@B@@@@@@A@@@@BB@@@B@BD@@@@@BA@@BA@@@@@EB@@BB@@A@@B@@@@@@@BBB@@@BBB@@BB@@B@@@@B@@BB@@@@@B@@@B@@@@B@B@B@@@B@BB@@@@D@@@@@@@@B@@@@@BB@@@B@@@B@@@A@@A@@@@@A@@@@@A@@A@B@@AA@@@@@@@@@@@@@@A@@@A@@@@@@B@@@@A@@@@B@@@@@B@@@@AB@@@B@@@BBB@B@@@D@@@BB@@BB@@AD@B@B@B@@@@B@@@@@B@@@@@B@@@B@BBB@@@@B@@@@B@@BB@@@@@BB@@A@@@@@BB@@@@@BB@@BDB@@@@B@@A@@@A@@@@BA@@BAB@@@B@@@@BB@@@B@@@@@@B@BA@@@@B@BBB@@@@@@B@@@B@D@@@@BB@@@@@B@@@@@@A@A@@@ABA@@@@DBB@@@B@BAB@B@@@B@B@F@B@B@@AB@B@@@@@@@B@@@BA@@@@BA@@B@@@@@@@BA@@B@BABA@AB@@B@@@@B@@B@@B@@@B@@@@@B@@@@@B@@@BBBA@@B@@@@@@@@B@@@@@@@@@B@BB@@B@@B@B@@@@@B@@@BA@@@@@A@AB@@@@@D@BB@@@@@@BA@B@BB@@@BA@@BABAB@@B@BBB@BBB@@DB@@BA@@D@@@B@DCBA@BB@@@@@@ABADA@@@C@A@@@C@@@@@@FA@@B@AA@@AC@AA@AC@@@@A@@CA@@A@@@A@@@@@ABB@@B@@@@@B@@@@@@AB@@@@@@@AA@@@A@@@A@@@@@@@AB@@A@@BA@@@A@@BA@@B@@@B@BAB@@@@@B@@@BAD@@@B@B@@A@@@A@@B@@@@@B@@A@A@@@@BA@@B@@@@AA@@ABA@A@@@@@@BA@@@BB@@@@A@@@@B@DA@@@@B@@A@@@@@AB@DAB@B@@@@@@AB@B@@B@@@ABBB@@A@@@@BBB@@@B@@B@AB@B@@@B@BA@@@@B@@@@@@@@@B@B@@@BBB@BAB@@@@@B@BA@@BA@@B@@@BA@@@@B@BAB@BB@@@A@@@@@A@@@@A@@A@@@@@A@@@A@@AA@@@@AAB@@@B@@@@ABA@@@A@A@@B@A@@A@@@@@@@A@@B@@@@A@@@@@A@@@AA@@@@@@@A@@@@@@@A@@@A@@@@@A@@A@@@@@@@@A@@@@@@@@@A@@A@@@@@A@@@@@CAA@AAA@@@AAA@@BA@A@@B@@@@@@AB@@ABA@A@AB@AA@@B@@AB@@@@AB@@@@@@ABA@@@@@ABA@@AA@A@@@A@@@@@AA@@@AA@@@@BA@@@@@A@@@@AA@@A@@@A@A@@@@@@@A@@@@@@B@@A@@@@@A@@BA@@@A@@AB@AA@@A@AA@AA@@@A@@AC@@@CAA@@@A@BABA@@@ACA@AA@@A@@@@BA@AB@@@AA@@A@A@A@A@A@@@@@@@A@@@@@A@@@A@@@@@A@@@AA@@AA@@AA@@@@A@@@@A@@A@@@@@BA@@@@@AC@@@@@CA@@AA@B@@@@@@@BA@@@@@@@@@A@AB@@@A@@@A@A@@@A@@@@B@@A@@B@@@B@@@@@BA@@@@@A@@@@@AB@@@@@@A@@@A@@@@BA@@@AB@@@@@@A@@@@BA@@@@B@@ABAB@AA@A@@AB@@@AAA@@@@BA@A@AB@@A@@@A@@@@AA@A@@@A@A@A@AA@@A@@@@@@@A@C@@B@@A@A@@@A@A@@A@A@@@@@@AAAA@@@@A@@@AA@@@A@@@A@@A@@@@@A@A@@@A@@@@A@A@@BA@@A@@A@CA@@@@@A@@@AAA@@@@B@B@@@BA@@@@A@AA@AA@@A@@@@@@@ABA@@@A@@AA@@A@@@A@A@@AA@@@AACAA@@A@@AA@@@AA@@@BAAA@AAAB@@@@@@@BA@@B@BA@@DADA@@B@@@@@@@B@@@B@@@B@@@B@@@@BB@@@@AB@A@BADC@AB@@@DA@@B@B@BA@@B@DA@@B@B@BABA@A@@@@@A@@@@AA@@@@@@@@@@AA@@A@@AA@@@AAA@CC@A@@@@@@B@D@F@F@B@@@@@F@DAB@DA@@DA@@AE@AB@BA@AB@@@B@@@@@DABA@AAA@CAAA@AAA@@@@AB@D@@AB@BA@@B@DAB@B@BA@@DAB@DA@@B@@A@@DA@@BABADABA@@B@@A@@DA@AB@@@@A@A@@@@BA@@@@B@D@B@@@@@BAD@@@BAB@@@@@@A@@@@B@@@@@@AB@@@B@@@@@@AB@@AB@@@@A@@@A@@@@@@@A@A@@ABA@@BAAA@@A@@AA@@AA@A@@@ABA@@A@A@A@@@AA@@CBCAC@@@@AACA@@A@@AA@@@A@@@@@@@A@@A@@@@@@@A@@@A@@@AA@@A@CAA@@@AA@@@AB@@@@@BA@@@A@@@@@AB@@@@A@@@@AA@@A@@A@@AA@@A@@@A@@@A@@AA@@@@AA@@A@@@A@@@AA@AA@A@@@A@A@@@@BA@@AA@A@@@AA@@AC@@@C@@B@@A@A@A@A@A@ABAAA@A@@@@@@A@@A@@@@@@@@AAA@@@@@A@@@@AAA@@AC@@A@@@@@@A@@@@B@BAAA@@@@@@@@@@DC@@@A@@@A@A@@@@@A@@A@@@@@@@@@@@@@@@@@@@@@@@AA@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@A@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@A@@@@A@@@@A@@@@@@@@@@@@@@A@@@@@@@@@@@@@@A@@@@@@A@@@@@@@@@B@@@@@@@@@@@@@@@@A@@@@A@B@@@@@@@@@@@@@@@@CAC@@@@@A@@AA@@AAA@@AAA@A@A@@@A@@@A@@@AAABA@@@A@@@A@@@@@A@@@@BA@@@AB@@A@@@@B@@@@A@@@ABBB@@@@@BAB@@@@A@@AAAA@@A@@A@AA@@@ACA@A@@A@AA@@A@@@@BA@A@@@A@A@A@CA@@@BA@AA@@@@@AA@AA@@@AAB@AA@@AABA@@@ABA@@@AB@@ABA@BB@@@@AB@@A@CB@@@B@@A@@BAB@@A@@@A@@@@@A@@A@@@@@@AB@A@@@A@@@@B@@@ACAAA@@A@@@@BA@@@A@@@@A@A@@A@@AA@@A@@A@@AB@AA@@@@A@@A@@AA@@@@A@A@AAA@@@@BA@@@A@C@@@@@A@A@@@A@@B@@AB@B@@@B@@@BA@@@AB@@@@A@AB@AC@AAAA@@@@A@@AC@A@A@AB@@@A@@AA@A@A@AA@@@@A@A@@@A@@@A@AB@@A@@@A@@@@A@A@@A@AC@@A@A@A@@@BE@@@A@@@AB@@A@@@A@A@@@A@AAA@@@A@A@@AC@@BABA@@@@BA@@@@@A@@AA@@@AA@@A@A@@@@@@A@@A@@B@@A@@@C@@@@@AB@B@BABAB@BA@@B@B@@@@A@@BABABA@@@@BA@@@@B@@A@@AA@A@@BABA@A@@@@@A@@A@BABA@@A@@A@@A@A@@@@AA@A@@@@@@@A@@@@@ABAB@B@@@@A@A@AB@@@@@A@@@@B@@A@@@@@AAA@A@@B@@@@@@@B@BAB@@A@@@@@@A@@ACA@@C@@A@@C@A@@@@@A@@@A@@@A@@@A@@@@A@@AA@@@@@@@A@@@@@ACA@@@@BAD@@@@ABA@@@@AACAA@@A@@A@@@A@@A@AA@BC@@@@@AA@@@CBA@@@@@@AB@@@@@@@A@@@A@@@@@@@@@C@@@ABA@@@@BA@@@@@@AA@@@@@@@A@@@A@@@@@BA@@B@@@@@AAA@@@ABA@AB@@AB@@@@C@@@AA@A@@@@@AA@@@@@@BA@@@@@A@@@@B@B@B@@@@AA@@@A@@@A@A@@@@A@@AB@@@@A@@"],
          "encodeOffsets": [
            [122956, 28237]
          ]
        }
      }, {
        "type": "Feature",
        "id": "330381",
        "properties": {
          "name": "瑞安市",
          "cp": [120.655148, 27.778657],
          "childNum": 27
        },
        "geometry": {
          "type": "MultiPolygon",
          "coordinates": [
            ["@@@@@@A@@@@@@BB@@@@@B@@@@@@AA@"],
            ["@@@@@A@@A@A@@@@@@B@@B@B@"],
            ["@@AA@@@@@@@@A@@@@A@@@@A@@@@@@B@@B@@@@BB@@@B@@@@@@@@@"],
            ["@@@@@@@@@@AA@@@@@@@@@@AB@@@B@@B@@@@@@BB@@A@@@@@@@@@A"],
            ["@@A@@@AA@@@@@@@@A@@@@@@@@@@@A@@@@@@@@B@@@@B@@@B@B@@BB@@@BA@@A@@@@@@@"],
            ["@@@B@AA@@@@AA@@@@@AAAB@@@@@B@@BB@@@@BB@@@BB@BA@@BA@@@@A@@A"],
            ["@@@@A@@@A@@@@@A@@@@@@@@B@@@@@@@@@B@@@@@@@@@@@B@@@@@@@@BB@@B@@AB@@AB@B@@@@AA@@@@@@@@@@A@@@@@@A@@@@@"],
            ["@@AA@@A@C@@@A@@@A@@B@@B@@BBBD@B@B@@@B@@@@AA@@A@@"],
            ["@@B@@@AAA@AA@@@@A@@@A@A@@@@@@BB@BB@BB@BBB@B@B@@@AA@@AA"],
            ["@@B@DA@CA@CAC@ABAB@DB@F@"],
            ["@@BA@@@AA@AAA@@@A@AB@B@B@@@DA@AB@D@B@@B@@@@ADCBAB@BA@@@@@A@@@@"],
            ["@@@@AA@@A@A@A@BB@DBB@B@@BBBB@@B@B@@A@A@A@A@A@@AAA@"],
            ["@@B@@A@@CAAAA@@A@@@AA@@AC@@@C@AB@B@@@B@@BBB@D@@@B@BBB@BBB@@@"],
            ["@@@A@@A@@@A@@@AA@@@@@A@@@@A@@AAB@@A@@B@@@@@@@@@@A@@@A@@@A@@B@@@BB@BBB@@@B@@@@@@@B@@@BDB@B@B@B@@@@AA@@@@@@@B@@A@@@@AA@@@@"],
            ["@@@A@@A@A@AAA@A@@BA@A@A@A@AB@@A@A@@BB@@@BBB@BBB@B@BA@@B@B@BB@@BA@@@A@@@@@A@@B@@@"],
            ["@@@AA@AA@@A@ABA@@@A@B@@@BB@@@@ABA@@@A@@@BBBBBBBB@@B@B@@@B@BAB@@AAA@AA@@@@A@@@@@@"],
            ["@@A@A@A@ACAAA@CAC@A@AB@BBBBDDBDBF@BBBAB@@C@A"],
            ["@@@AA@A@A@A@ABB@AB@@A@@@@B@B@@AB@BB@@@@@BA@@B@@@@B@@@B@@B@B@B@BBB@B@B@@@@A@@@@@@@AB@B@BA@A@@A@AAA@C@@@A@@A@A@@"],
            ["@@@@BA@@@@@@@AB@B@BAB@@@AA@@@@AA@@@A@@A@@B@@A@A@@BA@@BA@@BA@CBA@@@C@@B@B@@B@BB@BBB@BB@BBB@BA@@BA@@BB@@B@BA@@AAA@@@@@@A@@@AA@@A@@"],
            ["@@B@@AAAAAAA@ACGA@AA@A@@AACAC@@@@B@B@@A@@B@BBBDF@BBFB@B@@@B@BBBB@A@@AC@AB@@@BDBBB@"],
            ["@@AA@@AAC@A@@@AB@@AB@BB@BB@@@@AB@@BB@@AB@@AAA@@@@AA@@AA@@B@@@B@BDFBBD@D@DAD@B@@AAAAACA@A@@@@B@AA@@@A@@@@B@@BB@@@@@@@@A@@@@@A@@"],
            ["@@@@A@@@A@@A@AAAAAA@A@@B@BBB@@BD@BAB@B@B@B@@BBB@@@JFDBD@B@FAB@@A@AAAAAA@A@ABAAA@AAAA@A@CA@@@A@@A"],
            ["@@AAA@AAC@A@A@@BABA@A@AB@@@B@BADBBA@ABA@AB@@A@A@@@ABBBBBBAB@@@B@BBBBBAB@@AB@B@BA@ABA@@BADA@@B@@C@@@ABA@A"],
            ["@@B@BB@@BBB@B@@@@A@@B@@@BDB@BBB@@@@@@@@BAB@B@@@BB@B@B@B@@@AB@BB@DBD@B@BA@AB@BB@@BBB@B@BABA@ACCEC@AA@@A@ACACCAAAACAA@A@CAAAA@@@@@CAA@A@@B@@BB@@AB@B@@AAA@@BAB@@@BA@AAAAAB@@BB@@@B@@BBBB@@B@@A@@@@B@@@"],
            ["@@@A@@@@B@@AD@@@@A@@AA@@AAA@@@A@@@@A@ABABA@AA@AA@@@A@@AAA@@@AAA@@AAACAA@@AA@@AAAGAA@A@@B@@DDBB@B@BADABAF@B@@ABAD@FDDB@B@BAD@B@BA@B@@@B@@B@DBBB@@@@@BA@AB@@@BB@@@@@@@@BB@@@DA@@@A@@B@B@@@BCBA@@@A@@"],
            ["@@@@@@A@@@A@CBAA@@@@AAA@@@@B@@@@@BA@@@@@A@@@A@A@A@@@@AAB@AA@@@@AA@@@@@A@A@@@@A@@@@@@@@@@@@@@AA@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@A@@AB@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@A@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@A@@@@A@@@@@@@@@@@@@A@@@@@@@@@@@A@@@@@@A@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@A@@@@@@@@A@@@A@@@@A@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@AA@@@@@@@@@@B@@@@@@@@@@@@@@A@@A@@@@@@@@@@@B@@@@@@@@@@@@@@@@@AA@@@@@@@@@@@@@AA@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@A@@@AAAA@@A@@@ACAAA@@@@@@AA@@@@@A@@BABA@@AA@@@@@A@@A@AA@@@@A@AAAA@@@A@@@@@AA@@A@@@@@A@A@@@@@@@A@A@@@@@AA@@@@@@@AA@@A@A@AAA@A@@@A@A@A@@@@@@@A@@A@@@@@@A@@A@@@@@@@A@@@A@@@@@@@@@A@@AA@@@@@A@@AB@@@@A@@@@@A@@@@@A@@B@@@BC@@@@@A@@B@@@@A@AB@B@@A@@AAA@@@@A@@A@@@@@A@@@AA@@AA@@@BAAAAA@@BA@A@A@@@A@@@@@@@A@@@A@@@ABAB@ACAA@@A@@@@AB@@@@A@@@@@@BABA@@A@@A@@A@@A@A@@@AB@@@@@@@A@@A@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@A@@@@A@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@A@@A@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@B@@@@@@@@@@@@@B@@@@@@@@@B@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@A@@B@@@@@@@@@@@A@@@@@@@@@@@@@@@@@A@B@@A@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@AA@@@@@A@@@AA@@B@@AA@@@@A@@C@@@@@@@@A@@@AA@@@@@@@@@@A@@B@@A@@@A@@@AAB@@@@@@A@A@@@A@@@@AAC@A@A@AA@@A@AAA@@BA@AA@@AAA@A@AAAA@@A@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@A@@B@@@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@AB@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@A@@A@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@B@@A@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@B@@@@B@@@@@@@@@@@AB@@@B@@BB@@AB@@@@@@@BA@@@@@A@@@@@@B@A@@@B@@@@AB@@AB@@A@@@@@A@AB@@ABABAB@@@B@A@B@@AB@@@@E@A@AB@@@@A@@@@@@@A@@@@@ABA@@@@@@A@A@@@@@@A@ADA@A@@BA@@@AB@@@@@B@@A@@@A@AB@A@AB@AA@A@A@AB@@@AC@@A@@@A@CBABABA@@@@@@@AA@@@@AB@@C@@@A@@@@@AA@@@@BA@@A@A@@A@@@@@A@@B@BA@@B@@A@@B@@@@@BA@@@AB@@@A@@@A@@@A@@@@@@@@@@A@@@A@@A@@D@@@@@@A@@B@@@@@AA@@@@@A@AB@@@@A@ABA@@@@BB@@@AB@B@BA@@B@@A@@@A@@B@@@@@@@B@@@D@@@@@BA@A@A@@@A@@B@@@B@@@@@@@@@B@@@@@B@@@@A@@@@@@@@@AA@@@@@@@@@@@BA@@@@@@@A@@@@@AB@BB@@@B@@BB@@@@B@@@B@BC@@@@@@@AB@@@B@@@@A@@@@@AB@@A@@@A@A@@@A@@B@@A@B@@B@BBB@@@ABBB@B@@@@@@B@B@@@@@B@@@@@BB@@@A@ADAB@@@@A@AB@BB@@@@@@B@@@@A@@@A@@B@@@@@@@@A@@@A@@@AB@AAB@@ABA@@@@BA@A@A@@@AB@@ABC@@@AB@@@@AB@@@@@@@ACAC@@@A@@@A@@AA@A@A@A@A@@@@D@B@@@@A@A@@@A@@AAB@@@@@@B@@BA@@B@@@@@@A@@B@@A@A@A@@AA@@@C@@BCA@@@@A@@@@B@@@@@B@@@@@BA@@BA@@@AB@@B@@B@@@B@@@B@@@@AB@@@@A@B@AB@@@@A@@AAB@@A@A@ABA@ADA@@B@@AB@B@@AB@B@@ABAB@BA@@@A@@B@@C@@AA@@A@@A@@@BA@@@@@@@AA@B@@A@@@@@@@A@@@@B@@@@@@@@@@A@@@@@@@@@A@@@@@@@A@AAA@@@@@@@@A@@@@A@@@@AAA@A@@A@@A@@@A@@@@@@B@@@@@@A@@@@AA@@@@@@@@@@A@@A@@@A@@A@@@AAB@BC@@@A@ABAAA@@@@A@@@A@AD@@AB@B@@AA@A@@@@@@ABA@@@@A@@@@AB@@@@@A@@@@@@A@@B@@@@@@@A@@@@@@A@@B@@@@@B@@@@@@@@A@@@@B@@A@@B@@A@@@@AA@@@AAA@@A@@@@@AA@A@@@A@@A@@@@@@@AB@@ABAAAB@@A@AB@B@BA@A@@B@@A@A@@B@@@@AB@@@B@B@@@@CB@BA@CD@@AB@B@@@@A@A@@@AB@@A@@@@B@@@@@@@B@@@@@@@@@@@@A@@@@@A@BA@@@A@@@@@@@@@@@@A@@@@@AB@@@@ABAB@@@@A@A@AA@@AABABA@@@@B@B@@@@A@@A@@@@@A@@@@@@@@AA@@@AA@A@@A@@@@@A@@@@@AB@AA@@@@@@AB@A@@@@AA@@B@@A@@@A@@@A@A@@A@@@@@@AAB@@@@@BA@A@@A@@@A@A@A@@@AB@@AA@@@B@@@@A@@@@@@@A@@@A@@@@@@@@@@@@@AA@@AA@@@@@@@AA@@@@@@AA@@A@@@@A@@@A@ABA@ABCB@@@@@@@@@@@@@B@@@B@@@@@@B@@B@B@@@B@B@B@@A@@@AB@B@@@BBB@@BB@@@BB@BB@AB@BA@@@B@B@@@@@@@B@@@B@@A@@BA@@B@@@@A@@@A@@B@@@@A@@@@@@B@@@@A@AB@@C@AB@@@@A@C@A@@@@@AB@@@@@B@B@@A@@BCB@@@BA@@@ABCBABAB@@CB@@@BA@@@CBA@CB@@ABA@A@CBA@@@ABA@@BC@A@@B@@B@BBB@BB@DBB@BABCB@@@@A@@@A@@BABA@@BBF@@CB@@CBA@CBE@@@@@A@E@E@C@A@@@@@@@@BDDB@BB@@B@@BB@@@BB@@@@@@@@@@BB@@@@@B@@@@@BABABA@A@@@CBA@@@ABA@A@@@CB@@A@@BCDABB@A@@B@@A@@A@@A@@@A@@@A@@@A@@@@@@@A@@@CBCB@@ABA@@@AB@@@@@@A@BB@BBBAB@@B@@B@@BB@@@BB@DBBB@@B@@BB@B@@@B@@@BB@@@B@@AB@B@@@@@@@BB@@BBBB@@@@@AB@@A@A@@@@@BB@B@@@B@@@@DBB@@@@BB@@AB@B@@@@@@B@@@B@B@@@@@BB@@@B@@@B@@B@@@B@@B@BB@B@@@@B@B@@@@B@B@@@B@BA@@@@D@B@@@@@@@BB@@B@B@B@B@@@BBB@@@@@B@@@BA@@B@BAB@@@@BB@B@@BA@@@BBBA@AB@BA@@@@@AB@@@@@B@@@@A@@B@@AB@@@@@B@@@B@@@@A@@B@@@@@B@@@@AB@@@@A@@@A@@@@BA@@@@@@B@@@B@B@@@B@@BAB@@@@@@@@@B@@A@@@@@@@ABB@@DB@@@@D@@B@@@@AB@@@@B@@@@B@@B@@@@@BB@@BB@@BB@@B@@@@@B@@@B@@@@@B@@@@@@@B@B@B@B@B@@@BB@@A@@BAB@@@@@BB@@BDB@B@@ABABB@@@B@DB@@D@@BB@@@B@@BBBB@@@BBA@@BB@@@B@@AB@@@@@B@@@@A@@@@B@@@@@@@B@B@@@B@@@BB@@@@@B@@@@AB@@@@BB@@B@@B@@@@@B@@@BBB@@AB@B@@@@AB@B@@@@A@@B@@A@@BA@@@BBA@@B@BAB@BA@@B@@@@A@@@@BAB@@BB@B@@BB@BBB@D@@@@@B@@@@@BB@@@@@@@@@B@@@@@@@@@@BB@@@@@B@@@B@@@@@@@B@@@@@@@B@@B@@@B@@@@@B@@A@@@@B@@@@@@@BB@A@@@@B@B@@AB@B@@A@@@A@BB@@@@BB@@@B@@@B@@@@@BB@@@@@@B@@B@B@@@@@BBB@@@@BB@@@@BB@@@B@@A@@B@@@B@@@@@B@@@BB@@@@BB@B@@@@@B@@@@@@@B@@BB@@@B@@@B@@BB@@B@B@@@@@B@@@BB@@@@@@@BB@@@@@@@@@BBA@AB@@@B@@@@@B@@@BA@@B@@B@@@ABB@@B@@A@@@@@@BDB@B@@@@AB@@BB@B@@@@@B@@@B@BB@@B@@AB@B@@@BB@@@BBB@@B@@B@@@B@@BB@@@BA@@B@B@BB@@DC@@A@@A@@CE@@B@@@BA@@B@@AD@@@@A@ABA@@@@D@@B@@@B@@B@@@B@BA@@B@@@@BB@@@@@B@@B@@@@BAB@@A@@B@@@@@B@B@@@@@BB@@AB@@B@@@BBA@AB@@@BB@@@BBD@@@B@@@@@B@@@@B@BBBA@@B@@BB@@B@@B@@B@@@@BB@@@B@B@DB@@@@@B@@BB@@@B@@@B@@@@BB@BBB@@@@@@B@@@B@BA@@B@@@B@B@@@@@BA@@B@@B@@B@@BB@B@B@BB@@@@B@@@BA@@@@@@DA@@@@B@@@@@BA@@B@@B@ABB@@B@@@B@@B@@B@@@B@@@BBB@B@@@B@B@@B@@@@B@@@B@@@@AB@BABA@@@@BA@@@@@@BA@C@A@@@@@CA@@ABA@@B@@@@@B@@@B@@@BB@@@@B@B@BB@@DB@@A@@@@@@BB@@@BB@@@AB@@@B@@@B@B@@@@@B@@B@@@@@B@@AB@@@B@@@B@BBB@@@B@@@B@B@@B@@@B@@@@@B@@@B@@@B@B@BB@BB@@BA@@@@B@BA@@@@DBABAB@@@B@@A@@B@B@@@B@@@@@@@@A@@@AB@B@D@@@D@@@B@B@B@@@@@B@B@@AB@B@DA@@B@@@BABBB@@@@ABBB@B@B@BB@@@@@AB@@AB@D@DC@@@@BABAB@@@B@@@B@@BBA@@BA@A@@BBB@@@BA@AB@@@@A@AD@@A@@@A@@@A@A@@BAB@BAB@@@B@BA@@@@B@@A@@B@BAB@@@B@@@@A@@@@B@@A@@@@@A@@@A@@B@B@@@@A@@@A@@@@@@B@BAB@@@B@@@@@@@AD@@@@@@A@@B@@@@BBA@@@@BA@A@@@@B@@@B@@@@B@@@B@@@B@@@BB@B@@@B@@B@B@@@B@BAB@BBD@BBDA@B@@D@@@B@B@@@B@@A@@BA@@@AB@@A@@@@B@@BBBBB@@@BB@@@@@@BB@@BB@@B@@BBA@@B@@@@D@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@A@@@@@@@@@@@@@@@@B@@@@@@@@A@@B@@@@@@@@@@@@@@@@@@@@@@@@@@@@@B@@@BB@@@@@@@@BB@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@BB@@@@@AB@@@@@@B@@@@B@@D@@@B@@@@BB@@@@BB@@@AB@@@@@@@BABAB@@@@@@A@@@A@@BAB@@@@@@@@@B@@@@@B@BAB@@@@@@@B@B@BA@A@@@A@@@@@AB@@@@A@@BB@@B@@@B@@@@@@@BAB@D@@AB@B@@@@BB@B@@@B@B@@@B@B@@@@@B@@@BB@@B@@@@@@AB@@@@@@@DBBDB@@BB@@BB@@B@@@A@A@ABA@@A@A@AA@AA@A@@A@@@@@@@A@@B@@@B@B@BBB@B@B@B@@BBA@ABA@@@A@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@AA@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@BA@AA@@@@A@@@@B@B@@@@AB@@AB@BBB@@@@@@@BA@@B@@@@@@@AA@A@@@A@@@@AA@@A@A@@A@@BA@@@A@@@AD@BAB@@@@@@A@@@AA@AA@@C@A@@@@A@@@@A@@@@A@@B@@A@@@@@AA@CA@A@@A@CA@@A@A@@@A@@@AA@@A@@@@@A@@A@@A@@B@AA@A@@@@@@A@@@@B@@@@@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@A@@@@@@@@B@@A@@@@@@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@A@@@@@@@@@@B@@@@@@B@@@@@@@@@@@@@@B@@@@@@@@@B@@B@@@@@@@@@@@@B@@@@@@@@@@@@@B@B@@@B@@A@BBAB@@@@@@A@@B@BB@@B@D@@@@@@@F@@A@@B@@A@@B@@@@@@@BA@A@@@AB@@@B@@A@@B@@@B@B@B@@@@AB@@AA@AA@@BA@A@@@AA@@@@@@A@@@A@@@AB@@@@A@@@A@@@A@@@@B@@@B@D@@@B@B@B@BB@@B@@@B@B@D@B@BAB@@AB@BA@@B@BA@AB@B@@@B@DAD@@@@@DC@AA@@AA@A@@@A@@AC@CC@@@@@@@@FB@@DA@@@AA@@@AA@@@@B@B@B@B@@@BABAB@@@B@B@BBB@@ADA@@B@@@@@@@@@@A@A@@@@A@@@@AB@@AB@@B@@@BABB@@@@@B@@A@EB@@@B@@@BB@@BB@@BBBB@B@B@@@@@@B@@A@@@@@@@D@@@@@@BA@A@@BB@B@@@@@@A@A@@B@@@@B@B@@@BA@@B@@@B@@B@@B@@B@BB@@@@@BB@@@B@@B@B@@@@AB@BBBAB@@@@@@@@@@@@AB@@@@@BAB@@@@A@@@A@@B@A@@@@@A@@@@A@@BA@A@@@@B@B@@@@B@@B@@B@@@BA@@@@B@BBA@@B@@@@@@@B@@A@@B@BBB@D@B@@AB@@@B@@BB@B@@@@BB@@@@@@@@BB@@B@@@@@B@@@@@BB@BB@BB@@@DB@@@@@ABAA@@@@@@A@@A@@@@@@@@@A@@@@A@@B@@@B@@A@@@@@@@A@@@@@@@AD@@A@@@A@@@@@@@@B@@@@A@@@@@@@A@@@AB@@@@@@@@ABB@A@@B@@A@@@@BB@@@@@@B@A@BA@@@@@@@@B@@@@@@A@@@@B@@@@A@@B@B@@@B@@@@@@AB@@@B@@@@@B@@@@@@A@@@@@A@@D@B@@@@@@@@A@A@@A@A@@@@@A@@@A@@@@@@A@@@A@AA@@@A@@@@C@@@A@@@A@@@A@@@@B@B@@@BBB@B@@AB@@@@@@A@@B@@@B@@A@@BA@AB@@AB@BC@AA@@A@A@@AA@A@@@@@ABA@@@@@AAAAA@@@@AA@@@@@A@@B@@@@@AA@@A@@@A@@@AAA@@AB@BA@A@@A@@A@@AA@@@A@@@A@@@A@@@@@@@@@B@@@@@@B@@@@@@@@@@A@@@@@@B@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@A@@@B@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@BB@@@@@@@@@@@@@@@@@@@@@@@@@B@@B@@@@@@@@B@@@@@@@@@@B@@@@B@@@@@@@@@@@@@@@@@@@BB@@@@@@@@@@B@@@@@@@@@B@@@@@@@@@@@@@@@BB@@B@B@BB@@@B@@B@@@BB@@B@@@B@B@@@B@B@AAB@AAB@B@BB@@B@@@@AB@@@BB@@@A@@B@@@B@@A@@@@@@@AB@@@B@@@AA@@B@B@@@@@A@@@@@@@B@@A@@@A@@@@@A@@@AB@B@B@BA@@B@@@@@BAB@@@@@B@@@@BB@B@BB@@DBB@BBDBB@BA@BD@@B@AB@@@@BB@@A@@@ABBB@@A@@BA@A@@DBB@@@@@B@B@BBF@B@@@@B@@@B@@@@@B@B@@@@ABB@ABB@@@@@@@B@@B@@@@@B@@B@@@FCB@DBAB@AAB@@@B@@@B@@@B@@A@@@@BC@@@@B@@BB@@@@B@B@@@BBB@@@B@@@@B@@B@B@@@B@@@@AB@@@BA@@BB@@@@BA@@B@BBB@@B@@@BA@@@@BB@@@BD@@D@B@B@@@@@DBB@B@@@BB@B@@@@@@BAB@@A@@@B@@@@B@@A@@@A@@B@B@BB@@@@A@@@@@@@@B@@@@@@@@@@@BB@@@@A@@BB@@@AB@@B@@B@A@@@B@B@@@@@@@BB@@A@@@@@@@B@@@@@B@@@@@@@B@B@@@BAB@@@B@@@A@@@A@@@A@@@@@A@A@@@A@@@@@AAB@@@A@@@@@@@@@A@@@@@@@AAA@@@A@@A@@B@@@@@@@AA@@@A@@D@@@B@B@BA@@B@D@B@@@B@B@@@D@B@@@@@@B@ADB@@@A@@@@BB@@@A@@@@@BB@B@@@@@B@B@BB@@@@NEB@BA@@@@BABA@@BB@@@@B@BCB@@@BA@A@ABA@A@@@A@A@@@ABC@@@AB@B@@@BA@ABA@A@C@AA@C@@@AA@@AC@@A@AAAC@A@A@A@@C@@@@A@@@A@@@@@@@@@A@@@@@@AA@@AAB@@AA@BC@E@A@@@@@@B@@A@@@@B@@AB@@AFEB@@@@@AA@ADCNKBAB@@@B@@@@AB@@@B@@@@@D@BA@A@AB@@@@@BA@@BA@@B@BABCBAJELEFEBAVMRMA@M@KHWkSaGMAECEAEGGEIIEaWi[IEKGMUACUAUNIF@BEB@@CDCB@@CBCBAB@@A@GFA@CB@@A@B@@BA@A@A@@@@B@@@@BBABC@@@BBA@@@@B@AA@@@@@A@@@@BA@C@@@@AA@C@A@@@@@A@A@@@@BA@@BA@A@@@@@A@C@CBA@@A@A@A@ABA@AB@@A@@@@@A@@A@@@@@A@E@@@@@@B@@CBA@A@@@@B@@@@@@@B@@A@EBC@A@@@@C@A@C@@C@@B@@@@@@A@@B@@@@@B@@@@@@A@A@@@@B@@@@@@@BA@@@@@A@@@@@A@@B@@A@A@A@@@@@@B@@@@@BAB@@@B@@B@@B@@@BA@@@@@@@A@@B@@@@BB@@@B@@BB@@B@@@@@AB@@AB@BB@@@@@@@BA@BB@@@@@@@@@@@B@@BABBB@@B@@@@A@B@@@@B@@@B@@@@D@@@B@D@@@@BB@@@@B@@@BB@@@AB@@DB@BFB@@@ABA@@@BB@@C@@B@@@B@@@BB@@@@@A@A@@@AB@B@@A@@BA@@@@@@@@B@@@@A@@@@@AB@B@@AB@@@BAB@@EFAB@@AD@B@B@@@@@@@@A@AA@BA@@@@BA@@B@@A@ADABADA@AB@@@@@@AB@BA@A@@@@@@BAA@@@B@@@@@BA@@@A@AA@@@A@@@@@@A@@@@B@AA@@A@@C@AA@@@A@@A@@@@A@@A@@A@@@@@A@@AA@@@@AA@@@BAAAABAA@@AA@@@@@@@@B@@@@@@@@@@AB@BA@CD@A@@A@@@@@AB@@@@BB@@@@@B@@AB@@A@@@@BAB@@@@@AA@AB@@@B@@@@@B@BA@@@A@@BADAB@@@B@@AB"],
            ["@@A@@BA@A@A@A@@@@D@BBB@BD@D@B@B@@BBBD@BAB@B@BB@@B@BA@@CCAECAA@A@A@@@AAA@A@"]
          ],
          "encodeOffsets": [
            [
              [123948, 28333]
            ],
            [
              [124108, 28317]
            ],
            [
              [123955, 28303]
            ],
            [
              [123955, 28295]
            ],
            [
              [123832, 28314]
            ],
            [
              [123838, 28319]
            ],
            [
              [123843, 28300]
            ],
            [
              [123826, 28345]
            ],
            [
              [124105, 28317]
            ],
            [
              [124107, 28330]
            ],
            [
              [123746, 28333]
            ],
            [
              [124042, 28283]
            ],
            [
              [123828, 28355]
            ],
            [
              [123970, 28298]
            ],
            [
              [123853, 28325]
            ],
            [
              [123842, 28306]
            ],
            [
              [123723, 28357]
            ],
            [
              [124081, 28288]
            ],
            [
              [123812, 28360]
            ],
            [
              [124126, 28283]
            ],
            [
              [124137, 28272]
            ],
            [
              [123728, 28303]
            ],
            [
              [123744, 28341]
            ],
            [
              [124105, 28286]
            ],
            [
              [123890, 28329]
            ],
            [
              [123454, 28428]
            ],
            [
              [123794, 28369]
            ]
          ]
        }
      }, {
        "type": "Feature",
        "id": "330382",
        "properties": {
          "name": "乐清市",
          "cp": [120.983906, 28.113725],
          "childNum": 1
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": ["@@_HEB_JA@MDMFMFMD@@CBE@MDE@C@CBC@I@C@CBI@M@IBC@C@A@GAK@C@A@KC@@QGMECAA@GAG@IDC@EBA@A@IDCDC@@@CBABABED@BABAFABAFABAD@BAF@BAD@@CFCFCB@BBBDB@BB@B@@@@@B@@@@@@@B@@B@@B@@@B@@B@@@B@@@@@@B@B@@@@@@@B@@@@B@@@@BBA@B@@@CB@@B@@B@@@B@@@B@@@B@@@@@B@B@@B@@@@A@A@@@@@@B@@@@@B@@@@B@@B@@@@@B@B@@@B@@B@B@@A@A@@@A@@B@@A@@@@B@@B@@B@@@@@@@@B@ABB@@@B@@@@BBB@@@@@@AB@@@B@@B@@@@B@@@@@B@@@@@@BBB@@B@@AB@@AB@@@@@B@@D@@@BB@@@B@B@@BB@@@ABA@AB@@A@BB@@@@@AB@@@@@@@B@@@BB@@@@@B@@@A@@B@@@@D@@@@@@B@@@@A@@@C@@@@BBB@@BB@@B@@A@@B@@B@@@@@B@@C@@B@DB@@@@B@B@@@B@BAB@@@BB@@A@@B@@B@B@@@B@@@@A@@@@@@@@B@B@@@@AA@@A@@B@@B@@@A@@@@@@BA@@@B@@@@BA@@@B@@@BAB@@@BBBB@@B@BB@@B@D@@@BBB@B@@@B@BA@@F@@@B@@B@@AB@BA@A@A@@@@BA@@@@@@@@@@AA@@BAB@@@@ABA@A@A@@@A@@@@@AA@@@@A@@@@BA@@@@B@@@B@B@@@@@@@@@AA@@A@@@A@@@@@A@@@@B@@A@@@@@@@@@@@AA@@@A@@@@@A@@AA@@BBB@B@BA@AB@B@@@@@@AB@@@B@B@@@@@B@@@@@B@@@B@@BABBB@@BA@@B@@AB@@@BB@@@@BB@B@@@@B@@@B@@@@@B@@@B@@BB@@B@@@@BB@B@@@AB@@@@@@@@@BD@@@@BA@@@@@@@B@@@@@B@@BA@A@@@A@@BB@B@@@BB@@@@B@@B@@@@@B@@@@A@@BBBA@BB@@@@ABB@@@@@B@@A@B@@@@AB@@@B@@@@@@BB@@@@@@@B@@@@BBB@@@@BBB@@BB@@@@B@@B@@@@@B@@@@@@@B@@B@@BB@@@B@@@@@B@@@@@B@B@@B@@DB@BB@@@@@@AB@@B@BAB@@@B@B@B@B@@B@@@@B@@A@@@@@@@@BB@@@@@@@A@@@@@@@@B@@AB@@BBBBA@B@@BB@@@BBB@@BA@@BB@@BA@CB@B@BB@@@B@@B@@B@BBBBB@D@@@@@BD@@@BA@A@@@AB@@A@@@@BB@@@B@@@@BBB@@@@@B@@ABA@@@A@@@@B@@BBB@BBB@@@BB@@@BBB@@B@B@@@@@B@@A@@B@B@@@D@@@B@@@@@@@BB@B@@@@@B@@BD@@BB@@DBB@@@@BBB@@A@@B@@@@B@@B@@B@@@BB@@@@B@@@@B@@B@BBB@@B@@A@@BA@A@@BB@BB@@A@@@@@@@@@BB@@@@@@@B@@D@B@@B@@B@@BBB@@A@AD@@B@@B@@A@A@@@@@AAC@@@A@CBA@@@@B@B@B@@B@DBB@BBB@@BB@@@B@@@@@@A@@@@@@@@@@B@@@@@@@@@@BB@@ABB@@@@@@@BB@B@@@@@@@@@B@@@@@@@B@@@@@B@@@@@@BB@@@@@@@@@A@@BA@@@@@BB@@B@BAB@BB@@B@@@AB@BA@@B@@@@@B@@@@@@@@@B@@@B@@B@@B@@@B@@@@@@@B@@@B@@@@@BB@B@@BB@BBD@B@B@@B@@DBB@@@B@@@@@B@@BB@@@B@@@B@B@@BB@BB@@B@@@@ABBB@@B@@B@@@@@@B@B@@@B@@@@AAABBB@@A@@@@@A@B@@@B@@B@B@B@@@B@@@B@@BB@@AB@@@B@@@@A@BDBB@@@BA@@B@@@@BD@@@@@BB@B@BB@@B@@@@BB@@B@@@BA@@BA@@@AA@@@@A@AA@@B@@@A@@AA@@@@B@@@@ABA@@@A@A@@@@@AA@@AA@@AB@@B@@@AD@@B@@@@@@B@AA@A@A@@@@@@B@@@@A@@@A@@AA@@@AA@@@@@A@@@@@@A@@A@@@@A@CAAB@@A@@BAB@B@@@BB@@@@BB@@B@@@@@B@@A@@B@@@B@B@BB@@@@BD@@@@@@BB@@@@@B@B@B@@@@@B@@@BB@@B@@@@@@@@@BBBBB@BB@@@BD@B@@@B@B@BB@@@B@@A@@@@BBBBB@@@@BB@@@B@B@@BB@@@@@B@@AB@@@@@BAB@BB@@B@B@@@B@BA@@BABC@@B@@B@@B@@BB@@@BBBA@@B@@@BA@@@@B@@@B@B@@B@@B@@@@@B@B@@@@@B@@@@@@@@@B@@B@@B@@@@@@@BB@@@@BB@@B@BA@A@A@A@A@A@@@@@AA@@@@A@ABA@@@B@@D@@B@BB@@@@A@@B@@@@@@@@@BA@@BA@@@@B@@B@@@@B@@B@BB@BBBA@BB@@BB@@@@B@@@@@@BAB@@@B@@BB@@@@CB@@AB@@A@@@ADA@@@@@@B@@@@ABC@@BABA@@@@@@B@B@B@@A@@@@@@@@@@@A@@B@@BB@B@B@B@@@B@@@ACA@@AACA@@A@@@CA@@@B@@A@@@@@@@@B@@@@A@@B@@@@BBB@@B@@A@@@AB@@@B@@B@@@B@@@@B@@@@@BB@@@@@B@B@B@@BB@@@@@B@B@@DA@AB@B@@@B@@@B@BB@BB@@@@BBB@@B@@DBBBBB@@BBA@@B@@@@B@@@D@@@B@@@@@B@@@B@B@@@B@BB@@@BB@B@B@@@@@B@B@@AB@B@@@B@B@B@@@B@@@B@@@BA@@BAB@@@@@@@BA@@B@@A@@BA@@AA@@@@BEA@CC@@BA@@@@@@@A@A@AB@@@F@BBB@BBDB@@@AB@@B@@@@@AD@@@@@@B@@B@@@@@B@@@@@B@@@B@B@BB@@B@@@@@B@@AB@@B@@@@B@@@AA@@B@@@B@@@@@@@@B@@BB@@BB@BB@@@A@@B@@@@A@A@@@@B@@@@BB@@B@@BB@@A@B@@B@@B@@@@B@@@B@@AB@@AB@@@@@@@@@@B@@@A@@@@B@@@@@BB@A@@@@@@@@@@@@@@B@@@@@B@B@@@@@@@@@B@@@@@B@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@B@@@B@A@@B@@@@ABAB@@@@@B@@B@B@B@B@@B@@@@CB@@@B@@B@@@B@@@BBB@@@@B@@@@@B@B@@B@@@@@B@@B@@@@B@@@@B@@B@B@@B@@@@@B@@@@@@B@BB@@@BA@@@@@@B@@@@@B@@@@@@@D@B@@@@A@A@@BA@@@A@@@@@A@@@A@@B@@@BAA@BA@A@A@@@@B@@@BB@BB@BBB@B@D@B@B@@@@B@B@B@@@B@B@@@B@BBBB@@BB@@@@B@@@BB@B@@B@@B@@B@B@B@@B@@BBB@BBB@B@B@@@@@BBB@@BB@@@@@AB@BA@ABA@@B@@A@@B@@B@@@BB@@BBB@@BB@@B@BB@@@AD@@@BB@B@@@B@@B@B@@@@AB@B@BA@@B@@AB@@@@AAA@A@A@@AA@AB@@@@AAA@@@A@A@@AAA@@A@@@A@@@@@@@@B@@AD@@A@A@@@@BA@@@@@AAA@@@@B@@@@A@AA@B@@A@ABA@@@@B@@@B@@@B@@@BAB@@@B@@@@B@B@BB@@@@A@A@@@@B@@BB@@@@B@@@B@@B@@@@@BBB@@@@@B@@@@B@BB@@@@BD@BA@@@@@@@A@@B@AA@@B@@@@A@@@@A@BA@A@@@CB@@AB@@A@B@@B@@@@@B@@B@@@B@@@B@A@AB@@@@@@A@B@@@@BB@@B@@B@BD@B@D@@BB@@B@@@BB@@@BB@@@AB@@B@@@B@ABB@B@@@@@B@@@B@@@B@B@@@@AB@@@@@@@B@@@@@@@@@@@@@BA@@@BB@@B@@A@@B@B@@@@@BDB@@@A@@@@@@B@@B@@@@@A@@@@@BB@@A@@@@@@AA@A@@@@B@@BBB@@B@@B@@BB@@@D@@@@B@@@@@@@B@@@@@BB@@@@@B@@@BA@@B@BA@@@@BA@BB@@ADA@@@@B@@@BA@@B@B@@@@@@@F@B@B@B@BA@@@A@A@@B@@@@AA@@A@@@@@A@A@@@@@A@A@A@@@@@@@@BAB@@B@B@@@@BB@@@@@BB@B@@ABB@@DB@@@@B@D@@A@@@@A@@AB@B@@A@AB@@A@BB@BB@@@@A@@BDB@@@B@@@@@@B@@ABA@A@ABA@@AA@A@AB@@@BA@@B@@B@@@B@@@B@B@B@@@@@@@@@B@@@@@@@@@B@@@B@@@@@@@BB@@@AB@@A@@BA@@@@BAB@@@B@@@@@BB@B@@B@@@BA@@@@@@B@B@B@BB@@@@B@@@@@BADA@@BA@@BA@@@@@A@@B@@A@@@@@@@@B@@@B@@@@@B@@@@AA@@@@A@@BA@@@@@@@@@@B@@@B@@@@A@@@@BB@@@@BA@BBAB@@B@@B@@@@B@B@@@B@@@BB@@@@@@B@@@@A@@@@BB@@B@@B@@@@@B@BA@@B@@@B@@@BA@@B@B@@@B@@@B@BB@@B@@@B@@@B@@@B@@A@@@A@AB@@A@ABA@@B@B@@@@@B@D@BA@B@@B@@@@@A@@@@@@B@@B@@B@B@@B@@@@@@A@@B@@@BB@@@@A@@@A@@BBBB@@BB@@@BA@@B@@@@@@@BB@@@B@@@@@@BBBA@@@B@@@@@BB@@@@@D@@AB@@@@A@@@@BA@@@@@BA@@B@@B@@AB@@@@@AAA@@@@AB@@@@@@@@A@A@@B@@@B@B@@B@@@BB@@@B@@@BB@@B@@@@@B@B@@@B@@@@A@@@A@@A@@@@A@@@A@@@@@@BB@@B@@@B@B@@BB@BB@@@@BBDBB@B@D@BBB@@A@@B@@BB@BAB@@BB@BA@@B@@@BB@@BBB@@@BB@@B@B@B@@BAB@@@DAB@@@@BD@@B@@B@@@@BBA@@BA@A@A@A@AA@BAAA@@BA@@@@@BBB@@@@B@@B@B@@A@@D@B@B@BB@B@@B@@@@@B@BBB@B@@@BBB@@@@B@@@@A@@@AB@@ABBB@@@@B@@@B@@@B@@@@A@@@@@@B@@BB@@B@@BB@@B@@@@@@BA@@@DB@@@@B@@@@@ABAB@AC@@A@BA@@B@@@@B@@@BB@B@@@@@B@@B@@A@@@@BB@@@@@@A@AB@@@@@@AB@@@B@A@B@@@B@@@@@B@B@B@@@@@@B@@@A@@@BB@BB@@B@BBBBBBB@@B@@@B@@A@BBB@@@B@@BB@BBAB@BA@B@@B@@B@B@@@B@BB@@B@B@BBBBB@B@@BBBBB@@@B@@A@A@@BA@@@@B@B@BB@@B@BB@@@AB@@@@@@@@@@@@@@@@@@@@@@AB@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@@@@B@@@@@@B@@@@BA@@@@@@@@@@@@@@B@@@@@@@@@@A@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@BA@@@@@@@@@@B@@@B@B@B@@AB@@AB@@@AABA@A@@BA@@@AB@@AB@@@@BB@@@AABC@@@@@@B@D@@@@@B@@@BA@@@B@@@@B@@@@B@@@@@@BA@@BB@@@@B@@@D@@A@B@@BB@@A@@@@@@B@@B@@AB@@BD@@@B@BA@@@@@AA@@@@A@@B@AA@@@AB@@@B@@@B@@@B@@@@@@@B@@@@@@@BB@@B@@BBB@@@A@A@@@@@A@B@@@@B@@@@@@@BB@@@@B@@@@@@@A@@AB@@@@@@@B@@A@@@@@A@@B@@@AA@@@@BA@@@AB@@@AA@@@ABB@A@@@AB@@@BB@@@@@@BA@@B@B@@@B@@AB@@@@A@@BA@@@A@@@@@@B@@@BA@@B@@@@A@@@@@@A@@@@@@CBABBD@@@@@@@@C@A@A@A@@@ABAAB@AA@@A@@AA@@@@@@@A@@@@B@@@B@@@@ABA@BBA@@B@@A@@BA@@@A@@@ABABA@A@@@@B@@A@@A@@A@@BAB@@@@AA@@@@@A@@AB@@@B@@@@@@A@A@@BA@A@B@A@@@@@@D@@@BA@ABC@@@@B@@BB@@@@A@@BB@@B@@@@BB@@@@A@@@AA@@@D@@@@@@@@@BA@BB@@@BADM@@BAB@@AB@@A@@@@@@B@@@BA@@B@@A@@B@B@@A@@BBB@BA@@B@BA@@B@@AA@@@A@@@@@@@@A@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@AA@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@A@@@@@@@@@@@@A@@@@@@@@B@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@@A@@B@@@@@@@@@@@@@@@@@@A@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@AB@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@A@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@B@@@@@@A@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@B@@@@@@@@@@A@@@@@@@@@@@@@@@@@@B@@@@@@@@@@A@@@@@@@@@@@@@@@A@@@@@@@@@@@@B@@@@@@@BA@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@B@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@B@@@@@@@@@@@@@BA@@@@@@@@@@@@@@B@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@B@@@@@@ABA@A@AA@@AA@@@@@A@@@@@@@@@@A@@@@AA@A@@@A@A@@A@@@@@@@A@@@@AAA@A@@@@B@@A@@B@AA@@@@BA@@B@@A@@BB@B@@A@@@@@B@@@@B@@@@@@@B@@B@@@B@@A@@A@@@@@B@BA@@@@@@B@@@@@@@@@B@@@@@@@@@@B@@B@@@@@@A@@A@BA@@@B@@B@@@@@@@@A@@BB@@@@@@@@@B@@B@@@@@@AB@@A@@@@BB@@B@@AB@@@B@@@A@@AF@@AB@@AA@@@B@@@BA@@BA@@@@@@BAB@@@@@@@@@B@@@B@@@@A@@@A@@DAB@B@@@B@@AB@@@DABA@@@A@@DABA@@A@@AA@@@A@A@AAAAA@C@@@CB@@B@@A@ABA@@BAD@B@AAA@A@@@@A@@@@BA@@AA@@@AA@@AAA@@BA@@@@AAA@@AAA@@@@@A@@@A@@AA@@@AB@@AA@@A@@A@A@@@AAA@@@A@A@A@@@A@A@A@A@A@A@CB@@@AC@@B@@@@@@@@A@@@BBA@@@@@@@AA@@@@@@@@BA@@@@A@@@@A@@@@@@A@@@BAA@@@@@@@@@A@@@@@@AA@@@@@A@@@@@@A@@@@A@AAAA@@@@@A@AB@@@B@B@@GA@A@A@A@@@@@A@@@@@AAC@@AABCACB@@@@@B@@@@@B@@@@A@@@AA@@@A@A@AEAJKFGFEAI@C@@@@@AACA@@C@AAC@CAE@@CK@@@C@A@@@ABAA@@@AAAA@AAC@c@KAO@eEBG@EBCBKDGBC@C@C@GBKAUCCAA@AAECAAAC@CAA@AAGAO@E@E@K@IBA@ABA@@AA@@CE@@@AAO@GAC@A@OCUCUEeACIKMSECKEIECAGEIECAMIIIMIOMOUEEAAACAEISEKSgK_EMGkCQAACGK]ACIOCCamMV"],
          "encodeOffsets": [
            [123889, 28632]
          ]
        }
      }, {
        "type": "Feature",
        "id": "330329",
        "properties": {
          "name": "泰顺县",
          "cp": [119.717649, 27.556884],
          "childNum": 1
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": ["@@EBI@E@@@CDBF@HEFIJCHAB@BA@C@CAA@A@@B@@@B@@@D@H@DADABC@MDA@A@AB@@A@@@CCC@AAA@@A@C@A@AAA@@A@A@C@C@C@CAGAEAC@@@C@KAAAGCAGBCHDHBBA@CACCCCCIEECA@AA@@CE@CAC@@AACAE@A@C@AAAA@@BAF@D@BAGEAA@@@A@AB@BC@@AAA@@A@ABAB@B@BB@@B@@A@@DG@A@A@AA@@A@@A@A@@BA@ABA@A@A@A@CBC@@@AA@@A@A@A@A@A@@@E@A@ABAA@@A@@@BA@@@ACA@@@@@@A@@BA@ABABABAB@@C@A@A@@@A@A@@@A@@@A@@@@@A@C@AAA@AA@A@@A@@C@A@A@@@@A@A@A@A@@@A@AA@@A@@@ABABA@ABA@@@@@A@@A@A@A@@@A@AA@@@@A@@A@@BA@@B@@@@A@@@ABA@A@@@@@AC@C@E@AAA@@AA@@A@AB@@AB@@@B@BBDA@@B@@A@@@C@AAA@C@@@A@A@@B@@@B@B@@BBB@B@BBB@B@@BBB@@@BB@@BA@@@@@@@ABAAA@A@A@AB@@AA@@ABA@A@ABA@A@@@AAAA@@A@@@@@@@AB@@AB@@ABABABA@@B@@A@@BABABA@A@A@AAAACCACCCAC@@AAA@@AB@BA@@BCDAB@BAD@B@B@@A@AAC@AACA@@AA@A@A@ABCBA@A@A@A@AA@@A@CAA@AB@@@@@B@@@@@@@@@@@@A@@@A@@@@B@@A@@@A@@@@@@AA@@A@C@A@@AA@@A@A@A@CBABA@ABABAD@@@BAB@@ABA@A@ABA@EDA@ABC@ABC@ABA@@A@@A@@A@A@AAA@C@AAAA@@@CB@@A@C@C@A@CBA@ABA@CB@@C@@@A@A@@@ABA@@BA@@BB@@BBBBB@@@B@B@D@DAD@@@B@F@B@BBB@@B@B@BABADC@ABCB@B@BBBBDBBBBB@B@BABABABAB@@@@A@A@ABC@A@A@A@A@ABABCBAB@B@B@B@B@BBB@BBBAB@BAB@B@@A@A@A@A@A@C@C@@@A@@BA@@@@BA@ABA@A@A@A@@@A@@BAB@B@@AB@B@DAD@B@@A@@BE@ABA@A@AB@@@@@BB@BDBBDDBBBBB@DB@BBB@@@B@B@@@BAB@BA@A@A@CAA@AAAAA@@@@@@@AB@@BB@B@B@B@B@DAB@D@B@@A@@@@@A@@@ABA@A@@@ABA@@BA@@BAB@@@B@@BB@@@BA@@@CBA@AB@@AB@B@BAB@@ABA@ABA@C@ABAAA@A@A@A@A@A@AB@@AB@@@@@B@@@B@BBB@B@B@@ABABA@@BA@@BA@@B@@@@@@@BA@@@@@@@@B@@@@BB@@@B@@AB@B@D@B@@@B@@A@AB@@A@A@@@AAA@@B@@A@@BA@@B@BA@ABC@A@A@A@@BA@AD@BAB@B@BA@@BA@@@BBBBB@@BB@@@@@B@@AFAB@@@B@@BBB@@@BA@@BB@@@B@DB@@BB@@B@@BB@B@@@BB@B@B@D@D@@@BB@@@B@@B@@@@@BAB@BA@@B@@B@@BB@BBB@BBB@@B@@BB@@@@AB@BAB@@@BAB@@AD@@@@@BBB@B@@B@BB@B@@AB@BAB@@@@@B@@B@@@BBB@@@@B@B@@@B@@A@@@AAA@@@@BA@@@@B@B@@@B@B@@B@BBB@BB@@@@@B@BAD@B@B@BB@AB@@@@CBA@A@A@AB@@AB@@@B@BB@@@@B@@@B@B@B@B@B@@BB@@BB@@DB@@BB@B@@@B@@@B@@AB@@@@@@A@@@@@AB@@@@ABA@A@@@A@@BAB@B@B@BAB@@@@@B@@B@@B@@A@@BCBA@AD@@CBADA@@BA@AB@@@@AB@@@B@@@BB@@@B@@@@@@BA@@@A@A@A@@B@@ABAB@@@BA@@A@@@@@A@A@@@A@@@@A@AA@@@@AB@@A@A@A@@@A@A@@@A@AA@@A@C@A@AAA@AA@A@@A@@@A@@@A@@@@@BB@@@@@B@@@BA@@BA@AB@@A@AB@@A@@@@BDF@BBDDDDHBDBDD@@@B@B@@B@DAB@DBDBDBDDBBD@BAB@@@@ADE@C@EBI@EBA@A@A@C@CBA@EBA@E@A@EDABA@C@AAC@C@AB@BAF@B@D@F@FADAD@B@FBBBD@FABA@ADABAFBH@DDBBBD@DDDBBBDADABB@B@DBD@BBBBBD@@BDJ@BCDCDCHCB@DAB@BB@DFBFBD@D@BGFC@A@@@AB@BBB@@B@@BB@DB@@BDBB@@@BBB@B@@BD@@@@BB@B@@BB@@@B@B@B@BB@BB@@B@@BB@@@@@BB@@B@@@B@B@@BBB@@BB@DA@@BC@A@AB@@A@@@@B@@@@@@@B@BAB@@@B@@@B@@@@@B@@@B@@@BBB@@@@@B@@BBA@@@ABABA@AB@@BB@@A@@BB@@@BB@@B@B@@@@B@BBB@B@@@BBA@@B@@@B@@@B@B@BBB@@BB@@@B@@@D@BB@@@@B@@@@B@@B@@B@@@@BA@BB@@BA@@B@@@BB@@@B@@@BB@@@@@@B@B@@@@B@B@@@@@@BB@@BBB@@BB@@BB@@@@@BA@BB@@@@@B@@@@B@@@BAB@@BB@B@@@B@@BBA@@B@B@B@@@@@@@@@BB@@@@BB@@@@BBB@@A@@B@@B@@@BBBB@@B@@@B@@@B@@@@BD@@@@@@B@@B@@@B@B@B@@@B@@BBBBB@@B@BB@@B@@@B@DBD@BB@@BA@@BA@@B@@@B@DDB@@BB@@@B@@BB@@BF@B@@@B@DB@B@@@@@BB@@B@BBB@B@@BB@@@@BBB@BAB@@BB@@@B@BAB@BA@@B@@@B@@@@@@BBB@BB@@D@@@BB@@@BB@@@B@@BB@BBB@@B@@BDB@@B@@@@BB@@@BB@@B@@@@B@@@BB@@B@BB@B@@B@BB@@@@@@B@BB@@@BB@@BB@B@@BB@@A@@@@BCB@@@@@@@@@@A@@@@@@AB@@AA@@@@A@@@@@@@@@@AA@@@BA@@@@@@@B@@@@@@B@@@@@@@BB@AB@@@@B@@@@B@@A@@@@@@@B@@@@@@@@BB@BB@@@B@@A@@@@@@@@BB@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@BB@@@@A@@@@@@A@@AB@@A@@@@@A@BAA@@B@@@BA@@@AB@@@A@@@B@@@@@BB@BBB@@@@B@B@@@@@B@BBB@@BB@@B@@B@@@@@@@@B@@@BB@@@@@B@@DB@AB@@B@B@B@BA@A@ABA@A@AAA@@@A@@BA@C@@@A@@@@@@@@B@B@@@@@B@@@@ABB@@AD@DAB@@BB@@BAB@@ABC@A@AB@@@BAB@DBB@@@B@@B@@B@B@BAB@@@B@@A@A@A@@@A@A@A@A@ABAB@@A@A@@@@BB@B@B@B@@@B@@BBBB@@@BBB@BB@BB@B@@@B@@BB@B@DB@@@BB@@@B@B@@@B@@BBB@BBB@@BB@B@DBB@B@B@BA@BB@@@D@@@@@@@BA@@B@@@B@@@B@@AB@@A@@B@@A@@@@B@BBB@B@@@BAB@@AB@@@B@B@@@@@B@B@@@@@B@@@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@A@@@@@@@@@@B@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@@B@@@@@@A@@@@@@@@@@@@@@@@B@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@A@@@@@@@@@@A@@@@@@@@A@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@@B@@@@A@@@@@@@@@@@@@@@@@@@@@@B@@@A@@@@@@@@@@@@AB@@@@@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@A@@@@@@B@@@@@@@@@@@@@@@@@@@@@@A@@A@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@B@@@@@@@@A@@@@@@A@@@@@@@@@@@@@@@B@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@@@@A@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@A@@A@@@@@@A@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@A@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@ABAB@B@BAD@B@@@@@B@B@@A@@@AB@BA@@@@@AB@@@B@@@@@B@@@B@B@BA@@@@B@@@B@@A@AB@@A@@@AB@@A@@@@@@BAB@@A@A@@@@@@BA@@@ABA@@@@B@B@@BD@@@@@@@BAB@@AB@@@B@@AB@BCB@BB@@@AB@@@@ABA@@@@AC@@AABAB@BCBA@@B@@@@ABA@@@BDB@@B@@@B@B@BA@@@AB@@A@A@@@A@@@@@A@@A@@A@@@A@C@@A@@AA@@@@@BA@@@A@@@@A@@A@A@@@AAA@@BA@B@@BAD@@@@@@@@@@A@A@@@@@AAA@@AA@@@BA@@A@@@AB@@@@A@@A@@@@A@@@A@@@@@@@A@AB@@A@@@@BA@A@@B@B@@@@@BA@@@A@@@@@ABA@@@@@AB@@@@AAA@A@@@ABAB@B@@@BA@A@ABA@A@@B@BA@@BBB@@@@A@@A@@@@A@@@@@A@@D@@@@B@@BA@@@@@@@AB@@@@@BAB@@@BA@@B@@@B@@@@B@@BBB@@@B@D@@@BA@@BA@A@@B@B@@@@B@@@DBB@BDB@@DBB@BBDB@@@@@BA@AAAB@AA@@@C@@B@@ABBB@B@@A@@@@B@@A@@@@@AB@@@@@BB@B@B@@@B@B@@BBA@B@@BBB@BB@@@@B@@AB@@@B@B@BA@A@@@@@@@CAA@@@A@@@A@AD@@@B@@BBD@@@B@B@B@@BBB@BB@@BBD@@@D@@ABAB@@@B@@@@AB@@ABC@AD@HCDDB@D@HBB@@@@@B@@BB@B@BB@@B@BA@@@@B@B@BA@@@@B@BBBB@@DA@@@B@@@BBBBB@B@@A@@BAD@@BBBB@B@B@BBB@@DBB@B@B@B@B@@AB@BA@@FCBAB@B@FA@@B@@@DC@@@A@A@AAAAAAA@ABA@@@A@@BAB@@@B@@ABA@@A@@C@@@@@@BB@BB@@B@@B@B@@@@AA@@A@@B@@@B@BB@@@@@A@@@@@ABB@A@@@@@A@ACA@@A@@@BB@@A@A@A@@@AAA@@A@@BC@@@@@@B@@@B@BB@@@@B@@@B@@@AA@@@ABBB@@@@A@@@@@@AA@@A@@@@@@@B@@@@A@@@@@@@A@@@A@@@AA@@@@@@@@A@A@@@@@@B@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@A@@@@A@@@@@@@@@@@@@@@@@@@@@BA@@@@@@@@@@@@@@B@@@@A@@@@@@@@@@@@@@@A@@@@@@@@@@@@A@@@@A@@@@@@@@@@@@@@@@@@@@A@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@A@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@@@@AA@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@B@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@A@@A@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@@@@A@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@AA@@@@@@@@@@@@@@@@@@@@@@AB@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@@@AA@@AA@@@@AD@@@DBD@@A@@A@A@@@A@A@@@A@@@@A@@@@B@@@@A@@AAB@B@@@@@@A@@@AA@@A@@@A@@@@@A@@@@@A@A@@@@A@A@@@@A@AA@@@@@@A@@B@@A@A@@@A@@@A@@B@@@@@B@@A@@AA@@B@@@@@BB@A@@A@@ABBB@@@@@@@BA@@@@@B@B@@B@@@D@BA@@HABAB@@A@@@AB@B@@@@AB@@@@@B@BA@@@@@@@@B@@AB@@ABA@BBB@@@@@@ABAB@@B@B@D@B@@@@@B@@AA@@@A@@@@A@@@@BAB@@@D@@@@@A@@@AA@@AAAB@AB@@AB@B@@@@B@@B@@B@AB@@@@@@A@A@@D@@@BAB@D@@@BA@@@A@AB@@@@AACAAAAAA@@@A@@AC@A@A@@@A@@@A@@@@AA@@@AAAB@AAB@@@@ABAB@@@B@@@@@@B@@@B@@B@@A@@@@@@@A@@B@@@@@B@@@@B@@B@BA@@A@@A@@B@@@B@@@BAD@BA@@@@@@A@@A@@@@@@@@@AB@@AB@@@BB@A@@@@B@@@B@@B@@B@@A@@A@@AA@@@B@B@@A@@@@B@@@@@B@@@@@@@BB@@@@@@@@B@@@@@B@@@@@@@@@D@@@@@BB@@D@BB@@F@@@@@BAB@@AB@@@AA@@B@@A@@@A@AAA@@@A@@B@@AAA@A@AAA@@@@BA@@DAB@B@@@B@@@@C@@BA@@@BBA@@@@@@@A@@B@@@B@B@@@@@@@@@@@@AB@DA@@@@B@@@BAB@B@@@@@@@B@BA@@B@B@@A@@@AAAAABA@@B@@A@@@A@@@@@@@@B@@@@@@A@@@@@A@@@@BA@@@@AAAAA@BA@@BA@@@@@@AA@@A@@@AAAA@@@A@@BA@A@@@A@@@@@@@@@A@A@A@@B@BF@@B@@@BA@@BABA@BB@@AB@@@@@B@@BBA@B@@B@@A@A@@@@B@@@B@@@D@@@B@BB@@@@@AB@B@@BB@B@@@B@@@B@@@@@BA@@@@@@@A@@A@@@@@B@@C@@@AB@@B@@B@@@@A@@B@@@B@@@@A@@BABA@@@@B@@@@@@@@A@@@@@@B@@A@@@A@@@@@@@@@A@A@@B@@A@@@@A@@CBA@@@@BB@@@@BB@@@@@AB@@@@ABA@@@AB@@@B@@@@@@@BB@@@AB@@@BA@@@@@@B@@@BB@@B@@@B@B@@@@@AA@AAA@AAABA@@B@B@B@@@B@@@D@B@D@B@BAB@@@B@@@@@BBB@@B@@BBB@B@@@BAB@B@B@@@BA@@@@B@@@B@B@@@AA@A@AA@@CA@@@@A@@@@AC@AA@@AA@@@@@BAB@@@@@@@B@B@@@BB@@@@B@@@@@@@B@@@@@B@B@B@@BB@@AB@BBB@@@B@@@B@@@@@@@@A@@@@@A@@@@@AB@@@@@B@@A@@@@AAA@@@@@AA@A@@@@@C@@@A@@BA@A@B@@B@@@B@DBD@@@BADB@@BA@@B@@B@@B@@@BB@@D@@@@A@@ACBAA@BA@@BA@@@@AA@@BA@@@AB@@@B@@A@@@@@@B@@@BA@@B@@@BAB@A@B@@@@A@@BA@A@ABABA@@@@@AA@AAA@AA@@@@@ABA@@B@@A@@@A@@AA@@BAD@@@BA@@B@@@DB@@B@@@@@@B@@@@A@@@@@A@A@@@@BA@@@@@AA@@@@@@@@@BBB@@@B@@@@@@BA@B@@@@@@@@@@@BBA@@@BB@@@@@@AA@AA@@B@@A@@@@@B@@@@@BB@@@@@@B@@@BA@AB@B@@@@@@@@BBB@@@B@@@@CB@@@BB@@B@@@@@@@@AB@A@@@@@@@@@@@@@@@@A@@BA@A@@B@@@B@@AB@@@BB@@B@@B@B@@@BB@@@@A@@@@B@@A@A@@B@BA@@@AB@@@BAB@@@@@@A@@@@@@B@@@B@@@@@DA@@B@B@@@@@@BB@B@@@@BBAB@D@@AA@@AA@@@@@AA@@@@@@@@AA@@AAA@@@@A@@A@@AB@@AB@@@B@@@@@B@@A@@@@A@A@@@@@B@@@@@@A@@@@@@AA@A@A@A@@B@@A@@B@BAB@B@@@@@AD@BAB@BA@@@DB@@@@@B@@@@A@@@@B@@@@B@B@F@B@@@@@@AB@BBB@BA@@@@@A@@@@B@@@BB@A@@AA@@@@B@@@BA@@@@@@@A@@@@@A@@@AB@@@B@BAB@@B@@@@B@@@@@@B@@@@B@@@@@@@@@@A@@@AB@@@@@B@@@@A@@B@@@@A@@B@@@@@B@@@@@@@B@D@B@@@@@B@B@@@B@B@@@@@@BC@BB@@@@B@B@@@B@@@@A@@B@@A@@B@@@B@@@BA@@AA@@@@DAB@@@@A@@@@@A@@@@@@@@BA@@@BB@@@@A@@@@B@@B@A@@B@@BBB@@@@@A@A@@@@@A@@@A@AB@@@@@@A@@@@B@@B@AB@@@@@B@A@@A@@@@A@BA@@BA@A@@@@A@@@@A@@@@@@@@@@@A@@@ECCCCEAGEA@AACAA@A@A@A@@AA@AC@AA@AAC@A@AC@@A@CBAAAAGBCBABEDADABA@@BC@EAE@C@C@AACAIEECE@@@A@@AA@@BA@ABA@ABA@A@A@A@C@@@@B@BA@ABC@AAA@A@A@OASAMCAAEEAEDG@@FEDIAC@EEGIAEBAFEB@@GBUCIEC@@AC@CC@@@C@K@@BECAAAE@C@EEECACE@EA@A@@AAAGCCAAC@CA@@CCACAAAGCGE@E@AAAC@EAEC@G@A@KDAB"],
          "encodeOffsets": [
            [122920, 27998]
          ]
        }
      }
    ],
    "UTF8Encoding": true
  });
}));
