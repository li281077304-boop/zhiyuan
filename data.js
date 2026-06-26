window.APP_JSON_DATA = {
  "app": {
    "name": "宣城中考志愿通",
    "subtitle": "输入分数，查你能上哪所高中",
    "version": "1.0"
  },
  "statusBar": {
    "time": "9:41",
    "signal": "●●●●○",
    "wifi": "WiFi",
    "battery": "🔋"
  },
  "tabBar": [
    { "id": "home",    "label": "首页",   "icon": "🏠", "targetScreen": 0 },
    { "id": "schools", "label": "查学校", "icon": "🔍", "targetScreen": 7 },
    { "id": "contact", "label": "咨询",   "icon": "📞", "targetScreen": 8 }
  ],
  "screens": {
    "s01": {
          "cta": "立即查询 ›",
          "refTag": "",
      "featureCards": [
        { "icon": "📊", "color": "purple", "title": "分数匹配学校",  "desc": "输入中考分数，自动匹配宣州区内高中", "animateClass": "delay-1" },
        { "icon": "🏫", "color": "orange", "title": "冲稳保推荐",    "desc": "根据往年录取线，科学划分冲刺/稳妥/保底", "animateClass": "delay-2" },
        { "icon": "📋", "color": "green",  "title": "往年数据参考",  "desc": "2021-2025五年录取分数线，心中有数",   "animateClass": "delay-3" },
        { "icon": "📞", "color": "blue",   "title": "招生咨询",      "desc": "留下联系方式，获取一对一报考指导",     "animateClass": "" }
      ]
    },
    "s02": {
      "score": {
        "placeholder": "请输入中考总分",
        "unit": "分",
        "defaultValue": 650,
        "基准线": 669,
        "基准线名称": "宣城中学统招线"
      },
      "rank": {
        "label": "区排名",
        "placeholder": "输入区排名（选填，推荐更精准）",
        "optionalHint": "（选填）"
      },
      "nextButton": "查询匹配学校 ›"
    },
    "s05": {
      "icon": "🔍",
      "title": "正在分析你的分数…",
      "subtitle": "根据往年录取数据，为你匹配宣州区高中",
      "steps": [
        { "id": "genStep1", "text": "分析你的分数 — 已完成", "initialStatus": "done",    "dot": "✅" },
        { "id": "genStep2", "text": "检索往年录取数据 — 进行中", "initialStatus": "doing",   "dot": "🔵" },
        { "id": "genStep3", "text": "生成推荐方案 — 等待中",   "initialStatus": "pending", "dot": "⚪" }
      ],
      "animationTimings": [
        { "delay": 1200, "step2Dot": "✅", "step2Text": "检索往年录取数据 — 已完成", "step3Dot": "🔵", "step3Text": "生成推荐方案 — 进行中", "step3Status": "doing" },
        { "delay": 2500, "step3Dot": "✅", "step3Text": "生成推荐方案 — 已完成", "step3Status": "done" }
      ]
    },
    "s08": {
      "title": "宣州区高中一览",
      "searchPlaceholder": "搜索学校名称...",
      "filters": [
        { "label": "全部",  "selected": true },
        { "label": "公办",  "selected": false },
        { "label": "民办",  "selected": false },
        { "label": "省示范","selected": false }
      ]
    },
    "s09": {
      "menuItems": []
    }
  }
};

// ===== 宣州区高中数据 =====
// 数据来源：抖音HaoXueEducation1近五年对比图 + 百度百科
// 注：录取分数线为统招线，满分750分
window.XUANCHENG_SCHOOLS = [
  {
    "id": "xczx",
    "name": "宣城中学",
    "shortName": "宣中",
    "type": "公办",
    "level": "省示范高中",
    "address": "宣州区水阳江北大道",
    "phone": "",
    "tags": ["省示范", "重点", "百年名校"],
    "admission": {
          "2026": { "minScore": 681, "rank": 900, "planCount": 1350, "note": "预测线" },
          "2025": { "minScore": 669, "rank": 771, "planCount": 950, "note": "统招线" },
      "2024": { "minScore": 669, "rank": 1063, "planCount": 920, "note": "统招线" },
      "2023": { "minScore": 681, "rank": 697, "planCount": 900, "note": "统招线" },
      "2022": { "minScore": 683, "rank": 607, "planCount": 880, "note": "统招线" },
      "2021": { "minScore": 669, "rank": 799, "planCount": 850, "note": "统招线" }
    },
    "description": "安徽省示范性普通高级中学，创建于1906年，前身为宁国府中学堂，百年名校。学校现有72个教学班，学生近4000人，教职工277人，其中正高级教师1人、特级教师2人、省教坛新星5人、市级学科带头人33人。高考一本升学率逐年攀升，进入全省一流示范高中行列，近三年录取清北11人。学科竞赛获全国奥赛金牌3枚、银牌22枚。2017年获评第一届全国文明校园。校训：储才、学正、端本、求实。知名校友包括章伯钧、任新民（两弹元勋）、刘庆峰（科大讯飞总裁）等。",
    "features": ["百年名校", "省示范高中", "全国文明校园", "清北生源", "奥赛强校"]
  },
  {
    "id": "xcez",
        "name": "宣城二中",
        "shortName": "二中",
        "type": "公办",
        "level": "省示范高中",
        "address": "宣州区熏化路130号 / 状元南路244号",
        "phone": "",
        "tags": ["省示范", "老牌名校"],
        "admission": {
          "2026": { "minScore": 628, "rank": 2600, "planCount": 1350, "note": "预测线" },
          "2025": { "minScore": 594, "rank": 2770, "planCount": 850, "note": "统招线" },
      "2024": { "minScore": 650, "rank": 1754, "planCount": 830, "note": "统招线" },
      "2023": { "minScore": 655, "rank": 1668, "planCount": 810, "note": "统招线" },
      "2022": { "minScore": 657, "rank": 1646, "planCount": 800, "note": "统招线" },
      "2021": { "minScore": 637, "rank": 1791, "planCount": 780, "note": "统招线" }
    },
    "description": "安徽省示范性普通高中，始建于1962年。占地210亩，南临宛陵湖风景区。现有80个教学班，在校学生3863名，教职工329人，其中特级教师2人、正高级教师4人、高级教师122人、硕士研究生72人。高考成绩优异，多次夺得宣城市本科达线人数榜首，2012年本科达线1050人创历史，培养出多名清华北大学子。获评全国绿色学校创建先进集体、全国校园足球特色学校、安徽省文明单位、安徽省平安校园等数十项荣誉。校训：爱国、奋进、求知、为民。",
    "features": ["省示范高中", "本科率全市领先", "全国绿色学校", "智慧校园", "规模大"]
  },
  {
    "id": "bsd",
        "name": "北师大实验学校",
        "shortName": "北师大",
        "type": "公办",
        "level": "普通高中",
        "address": "宣城经济技术开发区博学路99号（合工大附近）",
        "phone": "",
        "tags": ["实验学校", "十五年一贯制"],
        "admission": {
          "2026": { "minScore": 643, "rank": 2150, "planCount": 500, "note": "预测线" },
          "2025": { "minScore": 597, "rank": 2708, "planCount": 400, "note": "统招线" },
      "2024": { "minScore": 627, "rank": 2563, "planCount": 380, "note": "统招线" },
      "2023": { "minScore": 631, "rank": 2567, "planCount": 350, "note": "统招线" },
      "2022": { "minScore": null, "rank": null, "planCount": 0, "note": "未招生" },
      "2021": { "minScore": null, "rank": null, "planCount": 0, "note": "未招生" }
    },
    "description": "宣城市人民政府与北京师范大学合作举办的十五年一贯制公办学校。2018年5月开工建设，2019年9月正式开学，2022年9月转为公办体制。校园占地25.8万平方米，总投资9.5亿元，设计规模126个教学班，覆盖幼儿园至高中全学段。现有84个教学班、3330名在校生及244名专任教师（硕士研究生近1/4）。依托北师大教育资源，实施小班化教学与特色课程融合。地址：宣城经济技术开发区博学路99号。",
    "features": ["北师大合作", "十五年一贯制", "小班化教学", "总投资9.5亿", "设施一流"]
  },
  {
    "id": "hxwy",
        "name": "华星外国语学校",
        "shortName": "华星",
        "type": "民办",
        "level": "普通高中",
        "address": "宣城市经济技术开发区",
        "phone": "",
        "tags": ["民办", "外语特色"],
        "admission": {
          "2026": { "minScore": 570, "rank": 3900, "planCount": 350, "note": "预测线" },
          "2025": { "minScore": 538, "rank": 3903, "planCount": 350, "note": "统招线" },
      "2024": { "minScore": 608, "rank": 3149, "planCount": 330, "note": "统招线" },
      "2023": { "minScore": 605, "rank": 3380, "planCount": 310, "note": "统招线" },
      "2022": { "minScore": 630, "rank": 2605, "planCount": 300, "note": "统招线" },
      "2021": { "minScore": 612, "rank": 2491, "planCount": 280, "note": "统招线" }
    },
    "description": "民办寄宿制完全中学，创办于2003年4月9日，以英语为教学特色。校园建筑面积3.1万平方米，现有42个教学班，学生逾1800人。位于宣城市经济技术开发区，环境幽雅，交通便捷。与南开大学汪氏英语教学法创立者汪士彬教授签订协议，建立南开大学汪氏英语华星教学培训基地。2006年被市教育局授予市级优秀民办教育学校称号。实行寄宿制封闭式管理，高考成绩位于全市同类高中前列。",
    "features": ["民办", "外语特色", "寄宿制", "南开大学合作", "同类高中前列"]
  },
  {
    "id": "xc13z",
        "name": "宣城十三中",
        "shortName": "十三中",
        "type": "民办",
        "level": "普通高中",
        "address": "宣州区教育园区",
        "phone": "",
        "tags": ["民办", "寄宿制"],
        "admission": {
          "2026": { "minScore": 540, "rank": 4000, "planCount": 750, "note": "预测线" },
          "2025": { "minScore": 493, "rank": 4528, "planCount": 400, "note": "统招线" },
      "2024": { "minScore": 545, "rank": 4614, "planCount": 380, "note": "统招线" },
      "2023": { "minScore": 599, "rank": 3537, "planCount": 350, "note": "统招线" },
      "2022": { "minScore": 577, "rank": 4121, "planCount": 330, "note": "统招线" },
      "2021": { "minScore": 586, "rank": 3092, "planCount": 310, "note": "统招线" }
    },
    "description": "民办完全中学，创办于2000年8月，前身为宣城市民办培英中学，2005年更为现名。学校占地约260亩，地处宣城市教育园区，毗邻宣城职业技术学院、合肥工业大学（宣城校区），建有科技楼、教学楼、师生公寓楼等设施，校舍建筑面积90000多平方米。现有82个教学班，在校学生3500余人，教职工380多人。实行全封闭寄宿制管理，推行分类管理、分层教学、多元发展办学模式。获评安徽省优秀民办学校、宣城市文明校园。招生电话：0563-3391072。",
    "features": ["民办", "寄宿制", "全封闭管理", "教育园区", "省优秀民办学校"]
  },
  {
    "id": "xcsz",
        "name": "宣城三中",
        "shortName": "三中",
        "type": "公办",
        "level": "市示范高中",
        "address": "宣州区状元北路200号",
        "phone": "",
        "tags": ["市示范", "艺术特色"],
        "admission": {
          "2026": { "minScore": 510, "rank": 4900, "planCount": 550, "note": "预测线" },
                "2025": { "minScore": 432, "rank": 5130, "planCount": 600, "note": "统招线" },
                "2024": { "minScore": 536, "rank": 4761, "planCount": 580, "note": "统招线" },
                "2023": { "minScore": 560, "rank": 4397, "planCount": 560, "note": "统招线" },
                "2022": { "minScore": 563, "rank": 4427, "planCount": 540, "note": "统招线" },
      "2021": { "minScore": 533, "rank": 4023, "planCount": 520, "note": "统招线" }
    },
    "description": "宣城市示范高中，创建于1973年，原名城关初中。2008年与市五中、七中合并迁至现址（宣城职业技术学院北校区），形成占地105亩的完全中学。现有57个教学班，在校学生2706人，教职工207人，其中高级教师41人。开设艺术特长班和楚英体育俱乐部，2020年加盟合肥六中卫星同步课堂。荣获全国特色学校、国防教育示范学校等国家级荣誉，多次被评为区、市级文明单位。校训：厚德、励志、和谐、特色。",
    "features": ["市示范高中", "艺术特长", "国防教育示范", "体育特色", "合肥六中合作"]
  },
  {
    "id": "xcwd",
    "name": "宣城市文鼎中学",
    "shortName": "文鼎中学",
    "type": "民办",
    "level": "普通高中",
    "address": "宣州区西林街道文鼎路138号",
    "phone": "",
    "tags": ["民办", "完全中学"],
    "admission": {
      "2025": { "minScore": 423, "note": "普高线" }
    },
    "description": "民办完全中学，创办于1994年5月，以清代数学家梅文鼎命名。占地19621平方米，建筑面积17186平方米，25个教学班，在校生1102人，教职工130人，其中高级教师17名。坚持平民化教育理念，低收费并提供奖助学金。教学设施包括理化实验室、多媒体教室、天文台及200米塑胶跑道运动场。自1997年首届毕业生至今，高考达线率在宣城市普通高中中处于前列，部分学生被中科大、中山大学、同济大学等高校录取。2004年获评宣城市优秀民办学校，2009年获安徽省民办学校先进单位称号。",
    "features": ["民办", "完全中学", "平民化教育", "安徽省先进单位", "天文台"]
  },
  {
    "id": "xcxxgc",
    "name": "宣城市信息工程学校",
    "shortName": "信息工程",
    "type": "公办",
    "level": "职业高中",
    "address": "宣州区宣古路8号",
    "phone": "",
    "tags": ["职业高中", "国家示范校"],
    "admission": {},
    "description": "公办中等职业学校，创办于1981年，前身为宣城县第四中学。学校历经多次合并更名，2011年更为现名。校园占地372.8亩，建筑面积15.6万平方米，建有教学楼、图书信息楼、实训楼、实训车间、400米标准运动场等设施。现有教职工226名，专任教师192人（硕士20人），开设机电工程、信息教育、经贸服务、护理等16个专业。2018年被教育部确定为国家中等职业教育改革发展示范学校。先后荣获全国职业教育先进学校、安徽省职业教育先进学校等称号。校训：笃志立身，攻术践行。学校同时挂牌宣城市高级技工学校。",
    "features": ["国家示范校", "职业高中", "中职教育", "技能培养", "40余年历史"]
  }
];

// ===== 学校匹配逻辑（前端本地执行） =====
window.getMatchedSchools = function(score, rank) {
  let schools = window.XUANCHENG_SCHOOLS || [];
  let results = { rush: [], stable: [], safe: [] };

  schools.forEach(school => {
    let ad = school.admission["2025"] || school.admission["2024"];
    if (!ad || typeof ad.minScore !== 'number') return;

    let diff = score - ad.minScore;

    // 冲：分数低于录取线30分以内
    // 推荐：分数达到或高于录取线60分以内
    // 保底：分数远高于录取线60分以上
    if (diff >= 60) {
      results.safe.push({ school: school, diff: diff, probability: "高" });
    } else if (diff >= 0) {
      results.stable.push({ school: school, diff: diff, probability: "高" });
    } else if (diff >= -30) {
      results.rush.push({ school: school, diff: diff, probability: "低" });
    }
  });

  results.rush.sort((a, b) => b.diff - a.diff);
  results.stable.sort((a, b) => b.diff - a.diff);
  results.safe.sort((a, b) => a.diff - b.diff);

  return results;
};
