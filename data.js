const datasets = [
  {
    "id": 1,
    "title": "中国OSM数据（2025-07-08）",
    "category": "OSM基础数据",
    "format": "GIS数据",
    "description": "中国OSM数据（2025-07-08），适用于基础底图构建、道路建筑提取、城市空间分析和GIS制图。",
    "link": "https://pan.baidu.com/s/1U-Yn1HjCU9tnAKSgkaffqg?pwd=grsw"
  },
  {
    "id": 2,
    "title": "2024公园绿地矢量",
    "category": "土地利用",
    "format": "SHP / GeoJSON / OSM",
    "description": "2024公园绿地矢量，可用于土地利用变化、城市扩张、生态空间识别和规划分析。",
    "link": "https://pan.baidu.com/s/1bpp6yRqaE3EbfE2VqphKTQ?pwd=grsw"
  },
  {
    "id": 3,
    "title": "2025年全国铁路数据",
    "category": "交通数据",
    "format": "SHP / GeoJSON / OSM",
    "description": "2025年全国铁路数据，适用于交通网络、道路可达性、公交地铁服务和城市交通空间分析。",
    "link": "https://pan.baidu.com/s/1FZXkGHiJ0NmBU_Pu4elEWg?pwd=grsw"
  },
  {
    "id": 4,
    "title": "2024国家标准矢量地图（精确到县）",
    "category": "行政区划",
    "format": "SHP / GeoJSON / OSM",
    "description": "2024国家标准矢量地图（精确到县），适用于行政边界制图、空间统计、区域分析和城市规划研究。",
    "link": "https://pan.baidu.com/s/1bE6Kg36To6MqJa3tH7hxDg?pwd=grsw"
  },
  {
    "id": 5,
    "title": "全国5级水系边界矢量数据",
    "category": "水文海洋",
    "format": "SHP / GeoJSON / OSM",
    "description": "全国5级水系边界矢量数据，适用于水系提取、水文过程、河湖海洋空间分析和生态环境研究。",
    "link": "https://pan.baidu.com/s/1MPCAs9L4XI2aXqM81iwnCA?pwd=grsw"
  },
  {
    "id": 6,
    "title": "2024年AOI兴趣面数据",
    "category": "城市空间",
    "format": "SHP / GeoJSON / OSM",
    "description": "2024年AOI兴趣面数据，适用于城市形态、建成环境、建筑密度、功能空间和空间结构分析。",
    "link": "https://pan.baidu.com/s/1i0T4_x7xwROfbtBXFWsOEw?pwd=grsw"
  },
  {
    "id": 7,
    "title": "中国土壤类型",
    "category": "土壤数据",
    "format": "GIS数据",
    "description": "中国土壤类型，适用于土壤类型、土壤侵蚀、农业生态和自然资源评价。",
    "link": "https://pan.baidu.com/s/1qIWSPj670R8q6c6fakK3qA?pwd=grsw"
  },
  {
    "id": 8,
    "title": "2023年全国景点数据",
    "category": "POI与活动数据",
    "format": "GIS数据",
    "description": "2023年全国景点数据，适用于城市活力、兴趣点分布、空间行为和公共服务设施分析。",
    "link": "https://pan.baidu.com/s/1OEx1HnrUn6kC_Ktwts0QZQ?pwd=grsw"
  },
  {
    "id": 9,
    "title": "世界铁路数据",
    "category": "交通数据",
    "format": "SHP / GeoJSON / OSM",
    "description": "世界铁路数据，适用于交通网络、道路可达性、公交地铁服务和城市交通空间分析。",
    "link": "https://pan.baidu.com/s/1ISNa1Gs96v6tNRrUaPNUXA?pwd=grsw"
  },
  {
    "id": 10,
    "title": "1901-2023中国逐月降水量",
    "category": "气候环境",
    "format": "TIF / 栅格",
    "description": "1901-2023中国逐月降水量，适用于气候变化、环境质量、热暴露、气象时空分析和城市环境研究。",
    "link": "https://pan.baidu.com/s/19tBh1ilKqKFcYOLnb8K9cQ?pwd=grsw"
  },
  {
    "id": 11,
    "title": "中国 2017-2023 土地利用 10m",
    "category": "土地利用",
    "format": "TIF / 栅格",
    "description": "中国 2017-2023 土地利用 10m，可用于土地利用变化、城市扩张、生态空间识别和规划分析。",
    "link": "https://pan.baidu.com/s/1IEwIKBNvPspIm4aJlaq2wQ?pwd=grsw"
  },
  {
    "id": 12,
    "title": "中国 2023 GLC FCS10 空天院",
    "category": "土地利用",
    "format": "GIS数据",
    "description": "中国 2023 GLC FCS10 空天院，可用于土地利用变化、城市扩张、生态空间识别和规划分析。",
    "link": "https://pan.baidu.com/s/1INUbrhHbPXM2Vc86ZKXL_A?pwd=grsw"
  },
  {
    "id": 13,
    "title": "2023年世界各国全国行政区划省市县",
    "category": "行政区划",
    "format": "GIS数据",
    "description": "2023年世界各国全国行政区划省市县，适用于行政边界制图、空间统计、区域分析和城市规划研究。",
    "link": "https://pan.baidu.com/s/16py1ADaiKN20gEE3KnLXLg?pwd=grsw"
  },
  {
    "id": 14,
    "title": "我国50个主要城市建成环境物质存量（水泥、钢铁等）空间分布数据",
    "category": "城市空间",
    "format": "GIS数据",
    "description": "我国50个主要城市建成环境物质存量（水泥、钢铁等）空间分布数据，适用于城市形态、建成环境、建筑密度、功能空间和空间结构分析。",
    "link": "https://pan.baidu.com/s/1Q-JgoeWaMaIGndD4V8J89g?pwd=grsw"
  },
  {
    "id": 15,
    "title": "全球LCZ地图100m分辨率",
    "category": "城市空间",
    "format": "TIF / 栅格",
    "description": "全球LCZ地图100m分辨率，适用于城市形态、建成环境、建筑密度、功能空间和空间结构分析。",
    "link": "https://pan.baidu.com/s/1hg9Kcktf-gC-AQghWSHJsg?pwd=grsw"
  },
  {
    "id": 16,
    "title": "2000-2021年全国各城市风速数据（逐日、逐月、逐年）",
    "category": "气候环境",
    "format": "TIF / 栅格",
    "description": "2000-2021年全国各城市风速数据（逐日、逐月、逐年），适用于气候变化、环境质量、热暴露、气象时空分析和城市环境研究。",
    "link": "https://pan.baidu.com/s/1kdFeWO6yF8Ud-2YszZfPsw?pwd=grsw"
  },
  {
    "id": 17,
    "title": "全国及分(31个)省全社会就业人员数1978-2022",
    "category": "人口社会经济",
    "format": "GIS数据",
    "description": "全国及分(31个)省全社会就业人员数1978-2022，可用于人口分布、社会经济统计、城市发展和区域比较研究。",
    "link": "https://pan.baidu.com/s/1Q3lpyNyNVmC3CnIZngIImg?pwd=grsw"
  },
  {
    "id": 18,
    "title": "中国公交网络数据集",
    "category": "交通数据",
    "format": "GIS数据",
    "description": "中国公交网络数据集，适用于交通网络、道路可达性、公交地铁服务和城市交通空间分析。",
    "link": "https://pan.baidu.com/s/1GH2FwuhfEXRUSDIcAtPSEw?pwd=grsw"
  },
  {
    "id": 19,
    "title": "中国OSM数据（2025-02-15）",
    "category": "OSM基础数据",
    "format": "GIS数据",
    "description": "中国OSM数据（2025-02-15），适用于基础底图构建、道路建筑提取、城市空间分析和GIS制图。",
    "link": "https://pan.baidu.com/s/1DkjMH8aI7trsyB1jTdm69A?pwd=grsw"
  },
  {
    "id": 20,
    "title": "2000～2019 年中国各省、市、区县分年、分月、逐日平均降水量",
    "category": "气候环境",
    "format": "TIF / 栅格",
    "description": "2000～2019 年中国各省、市、区县分年、分月、逐日平均降水量，适用于气候变化、环境质量、热暴露、气象时空分析和城市环境研究。",
    "link": "https://pan.baidu.com/s/1ICvIQg6Jh0lJEyk4I-XOHg?pwd=grsw"
  },
  {
    "id": 21,
    "title": "2024年10米土地覆盖数据",
    "category": "土地利用",
    "format": "TIF / 栅格",
    "description": "2024年10米土地覆盖数据，可用于土地利用变化、城市扩张、生态空间识别和规划分析。",
    "link": "https://pan.baidu.com/s/1hg8a79-xaG_lrTixNB9XBA?pwd=grsw"
  },
  {
    "id": 22,
    "title": "2020年森林年龄分布数据",
    "category": "遥感生态",
    "format": "GIS数据",
    "description": "2020年森林年龄分布数据，适用于遥感生态监测、植被指数、夜间灯光、生态环境和自然资源分析。",
    "link": "https://pan.baidu.com/s/1bgW1H446HFX1nRATwkmJJA?pwd=grsw"
  },
  {
    "id": 24,
    "title": "2020年中国大陆100m分辨率人口密度及年龄分层人口估算网格化数据集",
    "category": "人口社会经济",
    "format": "TIF / 栅格",
    "description": "2020年中国大陆100m分辨率人口密度及年龄分层人口估算网格化数据集，可用于人口分布、社会经济统计、城市发展和区域比较研究。",
    "link": "https://pan.baidu.com/s/1QhDF1sdh6S_-VILDH4Fjzw?pwd=grsw"
  },
  {
    "id": 25,
    "title": "1米土地利用分类",
    "category": "土地利用",
    "format": "TIF / 栅格",
    "description": "1米土地利用分类，可用于土地利用变化、城市扩张、生态空间识别和规划分析。",
    "link": "https://pan.baidu.com/s/1CicpF30Hkhcg0C1ys5WIEw?pwd=grsw"
  },
  {
    "id": 28,
    "title": "1900-2023全国地震数据",
    "category": "其他数据",
    "format": "GIS数据",
    "description": "1900-2023全国地震数据，可用于相关GIS空间分析、科研教学和数据整理。",
    "link": "https://pan.baidu.com/s/1wJCOSYaJoc-Yocw_46DHNA?pwd=grsw"
  },
  {
    "id": 29,
    "title": "2000-2021逐年、月、日气温",
    "category": "气候环境",
    "format": "TIF / 栅格",
    "description": "2000-2021逐年、月、日气温，适用于气候变化、环境质量、热暴露、气象时空分析和城市环境研究。",
    "link": "https://pan.baidu.com/s/16pQsVHrgAtBieF2OjPmAIQ?pwd=grsw"
  },
  {
    "id": 30,
    "title": "手机基站数据-OpenCellid",
    "category": "其他数据",
    "format": "GIS数据",
    "description": "手机基站数据-OpenCellid，可用于相关GIS空间分析、科研教学和数据整理。",
    "link": "https://pan.baidu.com/s/1O5GqZnMWMvVERgoZFKcESA?pwd=grsw"
  },
  {
    "id": 31,
    "title": "国土空间总体规划2020-2035合集",
    "category": "工具文档",
    "format": "GIS数据",
    "description": "国土空间总体规划2020-2035合集，适用于科研工具、资料整理、政策文档或学术资源查询。",
    "link": "https://pan.baidu.com/s/1L6n3LKYlemerT_dndq9YxA?pwd=grsw"
  },
  {
    "id": 32,
    "title": "中国地面空气质量观测数据（1942-2024年）",
    "category": "气候环境",
    "format": "GIS数据",
    "description": "中国地面空气质量观测数据（1942-2024年），适用于气候变化、环境质量、热暴露、气象时空分析和城市环境研究。",
    "link": "https://pan.baidu.com/s/1z9oZHvPCX1PQC0eQ2_Rmtw?pwd=grsw"
  },
  {
    "id": 33,
    "title": "中国住户调查统计年鉴2000-2024年",
    "category": "人口社会经济",
    "format": "Excel / 表格",
    "description": "中国住户调查统计年鉴2000-2024年，可用于人口分布、社会经济统计、城市发展和区域比较研究。",
    "link": "https://pan.baidu.com/s/1MauFpQVIrj2DrpadcSqFeg?pwd=grsw"
  },
  {
    "id": 34,
    "title": "2000-2022年全国植被指数数据NDVI数据",
    "category": "遥感生态",
    "format": "TIF / 栅格",
    "description": "2000-2022年全国植被指数数据NDVI数据，适用于遥感生态监测、植被指数、夜间灯光、生态环境和自然资源分析。",
    "link": "https://pan.baidu.com/s/1b3CmUNzxFPRKp4i5bhRcMg?pwd=grsw"
  },
  {
    "id": 35,
    "title": "Landscan2024",
    "category": "其他数据",
    "format": "GIS数据",
    "description": "Landscan2024，可用于相关GIS空间分析、科研教学和数据整理。",
    "link": "https://pan.baidu.com/s/1C2nD0qxztjlnp5ZT3fyYRw?pwd=grsw"
  },
  {
    "id": 36,
    "title": "2000-2020-250m全国植被覆盖度FVC",
    "category": "遥感生态",
    "format": "TIF / 栅格",
    "description": "2000-2020-250m全国植被覆盖度FVC，适用于遥感生态监测、植被指数、夜间灯光、生态环境和自然资源分析。",
    "link": "https://pan.baidu.com/s/1e2pOe91ICvgdGmAdUWg4-A?pwd=grsw"
  },
  {
    "id": 37,
    "title": "中国区域类NPP-VIIRS-500m夜间灯光数据",
    "category": "遥感生态",
    "format": "TIF / 栅格",
    "description": "中国区域类NPP-VIIRS-500m夜间灯光数据，适用于遥感生态监测、植被指数、夜间灯光、生态环境和自然资源分析。",
    "link": "https://pan.baidu.com/s/1DsIsyGHNNKc_TM4f8Dl0jQ?pwd=grsw"
  },
  {
    "id": 38,
    "title": "2003-2020年全球1km分辨率热浪暴露栅格数据",
    "category": "气候环境",
    "format": "TIF / 栅格",
    "description": "2003-2020年全球1km分辨率热浪暴露栅格数据，适用于气候变化、环境质量、热暴露、气象时空分析和城市环境研究。",
    "link": "https://pan.baidu.com/s/1Bud-Zk6sykzTkzy98Vq1TA?pwd=grsw"
  },
  {
    "id": 39,
    "title": "全国POI数据",
    "category": "POI与活动数据",
    "format": "SHP / GeoJSON / OSM",
    "description": "全国POI数据，适用于城市活力、兴趣点分布、空间行为和公共服务设施分析。",
    "link": "https://pan.baidu.com/s/1TALepoLi7MpCiom6dRh4LA?pwd=grsw"
  },
  {
    "id": 40,
    "title": "2024全国高速公路矢量数据",
    "category": "交通数据",
    "format": "SHP / GeoJSON / OSM",
    "description": "2024全国高速公路矢量数据，适用于交通网络、道路可达性、公交地铁服务和城市交通空间分析。",
    "link": "https://pan.baidu.com/s/1YG4YkpgSDugbPrGPr0_ioA?pwd=grsw"
  },
  {
    "id": 41,
    "title": "水文站GIS数据",
    "category": "水文海洋",
    "format": "GIS数据",
    "description": "水文站GIS数据，适用于水系提取、水文过程、河湖海洋空间分析和生态环境研究。",
    "link": "https://pan.baidu.com/s/1vYXUjVZh-ysaP3igt9s3nQ?pwd=grsw"
  },
  {
    "id": 42,
    "title": "湖北省土地利用",
    "category": "土地利用",
    "format": "TIF / 栅格",
    "description": "湖北省土地利用，可用于土地利用变化、城市扩张、生态空间识别和规划分析。",
    "link": "https://pan.baidu.com/s/1cvv4xtQ1B4OPYsdptPko-Q?pwd=grsw"
  },
  {
    "id": 43,
    "title": "1985-2022年中国国家重点保护野生动物栖息地空间分布栅格数据",
    "category": "遥感生态",
    "format": "TIF / 栅格",
    "description": "1985-2022年中国国家重点保护野生动物栖息地空间分布栅格数据，适用于遥感生态监测、植被指数、夜间灯光、生态环境和自然资源分析。",
    "link": "https://pan.baidu.com/s/1IobLMvN-GHv-mGtKU8iAmg?pwd=grsw"
  },
  {
    "id": 44,
    "title": "《中国海洋生态环境状况公报》2001-2022年",
    "category": "水文海洋",
    "format": "PDF / 文档",
    "description": "《中国海洋生态环境状况公报》2001-2022年，适用于水系提取、水文过程、河湖海洋空间分析和生态环境研究。",
    "link": "https://pan.baidu.com/s/1EXD7rB9lYs6A2IzVHy_Y-A?pwd=grsw"
  },
  {
    "id": 45,
    "title": "全国风景名胜区文保单位点位数据",
    "category": "遥感生态",
    "format": "GIS数据",
    "description": "全国风景名胜区文保单位点位数据，适用于遥感生态监测、植被指数、夜间灯光、生态环境和自然资源分析。",
    "link": "https://pan.baidu.com/s/1BwgSsVKqpJzO7Z1_qrt3GA?pwd=grsw"
  },
  {
    "id": 46,
    "title": "全球大气二氧化碳浓度2°x2.5°栅格模拟数据集（1992-2020）GlobalSimulatedCO2 1992-2020",
    "category": "气候环境",
    "format": "TIF / 栅格",
    "description": "全球大气二氧化碳浓度2°x2.5°栅格模拟数据集（1992-2020）GlobalSimulatedCO2 1992-2020，适用于气候变化、环境质量、热暴露、气象时空分析和城市环境研究。",
    "link": "https://pan.baidu.com/s/148hjFggNKxC5FqWvA5s0pg?pwd=grsw"
  },
  {
    "id": 47,
    "title": "各省、市、县鸟种、观鸟记录数据（1980-2024年）",
    "category": "遥感生态",
    "format": "GIS数据",
    "description": "各省、市、县鸟种、观鸟记录数据（1980-2024年），适用于遥感生态监测、植被指数、夜间灯光、生态环境和自然资源分析。",
    "link": "https://pan.baidu.com/s/1kXpyuTWtJi5sy-yPrNtjkg?pwd=grsw"
  },
  {
    "id": 48,
    "title": "1985-2024年全球30米分辨率逐年不透水面栅格数据",
    "category": "土地利用",
    "format": "TIF / 栅格",
    "description": "1985-2024年全球30米分辨率逐年不透水面栅格数据，可用于土地利用变化、城市扩张、生态空间识别和规划分析。",
    "link": "https://pan.baidu.com/s/1zoVVGcon8A5ff92tr4VMKQ?pwd=grsw"
  },
  {
    "id": 49,
    "title": "各省、市、县鸟种、观鸟记录数据（1980-2024年）",
    "category": "遥感生态",
    "format": "GIS数据",
    "description": "各省、市、县鸟种、观鸟记录数据（1980-2024年），适用于遥感生态监测、植被指数、夜间灯光、生态环境和自然资源分析。",
    "link": "https://pan.baidu.com/s/13bvUtcyOiZxT-rVhHLy9Dw?pwd=grsw"
  },
  {
    "id": 50,
    "title": "2024年11月全球海洋数据shp",
    "category": "水文海洋",
    "format": "SHP / GeoJSON / OSM",
    "description": "2024年11月全球海洋数据shp，适用于水系提取、水文过程、河湖海洋空间分析和生态环境研究。",
    "link": "https://pan.baidu.com/s/1rC_d4d_wbiiTwLuTSisd0w?pwd=grsw"
  },
  {
    "id": 51,
    "title": "公元前3400年至公元2024年全球国家地理边界演变数据集",
    "category": "行政区划",
    "format": "SHP / GeoJSON / OSM",
    "description": "公元前3400年至公元2024年全球国家地理边界演变数据集，适用于行政边界制图、空间统计、区域分析和城市规划研究。",
    "link": "https://pan.baidu.com/s/1_5AUYvVR5qexZ_MqFMCoWw?pwd=grsw"
  },
  {
    "id": 52,
    "title": "EULUC-China2.0",
    "category": "土地利用",
    "format": "GIS数据",
    "description": "EULUC-China2.0，可用于土地利用变化、城市扩张、生态空间识别和规划分析。",
    "link": "https://pan.baidu.com/s/1tiJsw_bF1SymMwkpZpyHJw?pwd=grsw"
  },
  {
    "id": 53,
    "title": "中国250米归一化植被指数（2000-2022）",
    "category": "遥感生态",
    "format": "GIS数据",
    "description": "中国250米归一化植被指数（2000-2022），适用于遥感生态监测、植被指数、夜间灯光、生态环境和自然资源分析。",
    "link": "https://pan.baidu.com/s/1jbYzVq8s_4cagGfXyz0liQ?pwd=grsw"
  },
  {
    "id": 54,
    "title": "2024年我国多属性建筑矢量数据",
    "category": "城市空间",
    "format": "SHP / GeoJSON / OSM",
    "description": "2024年我国多属性建筑矢量数据，适用于城市形态、建成环境、建筑密度、功能空间和空间结构分析。",
    "link": "https://pan.baidu.com/s/1euQ8TkwzjCR-bkqHx_7X8w?pwd=grsw"
  },
  {
    "id": 55,
    "title": "百度热力图-北京市",
    "category": "POI与活动数据",
    "format": "GIS数据",
    "description": "百度热力图-北京市，适用于城市活力、兴趣点分布、空间行为和公共服务设施分析。",
    "link": "https://pan.baidu.com/s/1B1SxPXDpsWCSOL3zG3DKSQ?pwd=grsw"
  },
  {
    "id": 56,
    "title": "2025年4月全国铁路线路osm",
    "category": "交通数据",
    "format": "SHP / GeoJSON / OSM",
    "description": "2025年4月全国铁路线路osm，适用于交通网络、道路可达性、公交地铁服务和城市交通空间分析。",
    "link": "https://pan.baidu.com/s/1NTLLINat6sexYfG0fRRpFg?pwd=grsw"
  },
  {
    "id": 58,
    "title": "2025路网数据",
    "category": "交通数据",
    "format": "SHP / GeoJSON / OSM",
    "description": "2025路网数据，适用于交通网络、道路可达性、公交地铁服务和城市交通空间分析。",
    "link": "https://pan.baidu.com/s/1VoxN7ycFVnKffMbDMcxLGw?pwd=grsw"
  },
  {
    "id": 59,
    "title": "2024路网数据全国分省分市区osm",
    "category": "交通数据",
    "format": "SHP / GeoJSON / OSM",
    "description": "2024路网数据全国分省分市区osm，适用于交通网络、道路可达性、公交地铁服务和城市交通空间分析。",
    "link": "https://pan.baidu.com/s/1Sb5YFgB80GnkXSZkDcEiCQ?pwd=grsw"
  },
  {
    "id": 60,
    "title": "全球海洋测深DEM（GEBCO）数据集",
    "category": "水文海洋",
    "format": "TIF / 栅格",
    "description": "全球海洋测深DEM（GEBCO）数据集，适用于水系提取、水文过程、河湖海洋空间分析和生态环境研究。",
    "link": "https://pan.baidu.com/s/1pa9ORv7eMqDXw3puIh_mOQ?pwd=grsw"
  },
  {
    "id": 61,
    "title": "中国OSM数据（2025-06-03）",
    "category": "OSM基础数据",
    "format": "GIS数据",
    "description": "中国OSM数据（2025-06-03），适用于基础底图构建、道路建筑提取、城市空间分析和GIS制图。",
    "link": "https://pan.baidu.com/s/1MwiSjf3BWhFH8g_6YKiaag?pwd=grsw"
  },
  {
    "id": 62,
    "title": "中国土壤侵蚀空间分布数据",
    "category": "土壤数据",
    "format": "GIS数据",
    "description": "中国土壤侵蚀空间分布数据，适用于土壤类型、土壤侵蚀、农业生态和自然资源评价。",
    "link": "https://pan.baidu.com/s/1FW4O1pcaKz7AgpwvCj8L8A?pwd=grsw"
  },
  {
    "id": 63,
    "title": "OSM基础数据（fclass+region）",
    "category": "OSM基础数据",
    "format": "GIS数据",
    "description": "OSM基础数据（fclass+region），适用于基础底图构建、道路建筑提取、城市空间分析和GIS制图。",
    "link": "https://pan.baidu.com/s/1MCY27aiqxORU6ZoUOL4ZGQ?pwd=grsw"
  },
  {
    "id": 64,
    "title": "2024年公园绿地数据",
    "category": "土地利用",
    "format": "GIS数据",
    "description": "2024年公园绿地数据，可用于土地利用变化、城市扩张、生态空间识别和规划分析。",
    "link": "https://pan.baidu.com/s/1OblpcfYQBZuVsj1hQ02khg?pwd=grsw"
  },
  {
    "id": 65,
    "title": "2000-2020叶面积指数",
    "category": "遥感生态",
    "format": "GIS数据",
    "description": "2000-2020叶面积指数，适用于遥感生态监测、植被指数、夜间灯光、生态环境和自然资源分析。",
    "link": "https://pan.baidu.com/s/148MozQHmK6LtDKmDq2nw5A?pwd=grsw"
  },
  {
    "id": 66,
    "title": "中国区域30米分辨率LS因子数据集V1.0",
    "category": "地形数据",
    "format": "TIF / 栅格",
    "description": "中国区域30米分辨率LS因子数据集V1.0，适用于地形分析、坡度坡向计算、水文分析和空间建模。",
    "link": "https://pan.baidu.com/s/1Vt737m9FiglznMvZeCWrDA?pwd=grsw"
  },
  {
    "id": 67,
    "title": "中国土壤质地空间分布数据",
    "category": "土壤数据",
    "format": "GIS数据",
    "description": "中国土壤质地空间分布数据，适用于土壤类型、土壤侵蚀、农业生态和自然资源评价。",
    "link": "https://pan.baidu.com/s/1eL-HZxDf_IVYIrKq1NC7Zg?pwd=grsw"
  },
  {
    "id": 68,
    "title": "中国标准行政区划数据GS（2024）0650号",
    "category": "行政区划",
    "format": "GIS数据",
    "description": "中国标准行政区划数据GS（2024）0650号，适用于行政边界制图、空间统计、区域分析和城市规划研究。",
    "link": "https://pan.baidu.com/s/1dJS3GAU96EiwF2wSKh3-AQ?pwd=grsw"
  },
  {
    "id": 69,
    "title": "中国城市统计年鉴1985-2024年（EXCEL版本）",
    "category": "人口社会经济",
    "format": "Excel / 表格",
    "description": "中国城市统计年鉴1985-2024年（EXCEL版本），可用于人口分布、社会经济统计、城市发展和区域比较研究。",
    "link": "https://pan.baidu.com/s/10bT_IBQFyWJhJDAc1gzTIg?pwd=grsw"
  },
  {
    "id": 70,
    "title": "全国逐小时人口密度分布（五个时段）",
    "category": "人口社会经济",
    "format": "TIF / 栅格",
    "description": "全国逐小时人口密度分布（五个时段），可用于人口分布、社会经济统计、城市发展和区域比较研究。",
    "link": "https://pan.baidu.com/s/1D1IwOZ33LC-xztdcVRpTcA?pwd=grsw"
  },
  {
    "id": 71,
    "title": "中国31个主要城市的绿地数据1m分辨率",
    "category": "土地利用",
    "format": "TIF / 栅格",
    "description": "中国31个主要城市的绿地数据1m分辨率，可用于土地利用变化、城市扩张、生态空间识别和规划分析。",
    "link": "https://pan.baidu.com/s/1LEb5AFAw9OqypaYaiqbrVw?pwd=grsw"
  },
  {
    "id": 72,
    "title": "2024居住区矢量osm",
    "category": "城市空间",
    "format": "SHP / GeoJSON / OSM",
    "description": "2024居住区矢量osm，适用于城市形态、建成环境、建筑密度、功能空间和空间结构分析。",
    "link": "https://pan.baidu.com/s/1Nzn4MH7LMRhYrkbEl9Jrqg?pwd=grsw"
  },
  {
    "id": 73,
    "title": "中国潜在蒸散数据1990-2021",
    "category": "气候环境",
    "format": "GIS数据",
    "description": "中国潜在蒸散数据1990-2021，适用于气候变化、环境质量、热暴露、气象时空分析和城市环境研究。",
    "link": "https://pan.baidu.com/s/1r34kMoUEhiQq58c216gmTQ?pwd=grsw"
  },
  {
    "id": 74,
    "title": "全球日尺度时空连续地表土壤水分数据集（2002-2020）",
    "category": "土壤数据",
    "format": "GIS数据",
    "description": "全球日尺度时空连续地表土壤水分数据集（2002-2020），适用于土壤类型、土壤侵蚀、农业生态和自然资源评价。",
    "link": "https://pan.baidu.com/s/1CmJBXCMiqpf01vZ9Ge25wA?pwd=grsw"
  },
  {
    "id": 75,
    "title": "人类预期寿命数据1960-2022年（世界各国、中国省域）",
    "category": "人口社会经济",
    "format": "GIS数据",
    "description": "人类预期寿命数据1960-2022年（世界各国、中国省域），可用于人口分布、社会经济统计、城市发展和区域比较研究。",
    "link": "https://pan.baidu.com/s/1VbKuCDuMHqkpa5EuTK-TlA?pwd=grsw"
  },
  {
    "id": 76,
    "title": "2024全国火车站矢量osm",
    "category": "交通数据",
    "format": "SHP / GeoJSON / OSM",
    "description": "2024全国火车站矢量osm，适用于交通网络、道路可达性、公交地铁服务和城市交通空间分析。",
    "link": "https://pan.baidu.com/s/1g1n-aEZ55RZfBm7Due2dkg?pwd=grsw"
  },
  {
    "id": 77,
    "title": "专利数据库1984-2025.5",
    "category": "工具文档",
    "format": "Excel / 表格",
    "description": "专利数据库1984-2025.5，适用于科研工具、资料整理、政策文档或学术资源查询。",
    "link": "https://pan.baidu.com/s/1V6dqPlr1KovSKfPv_VsHEw?pwd=grsw"
  },
  {
    "id": 78,
    "title": "WHUCR-中国乡村道路数据",
    "category": "交通数据",
    "format": "GIS数据",
    "description": "WHUCR-中国乡村道路数据，适用于交通网络、道路可达性、公交地铁服务和城市交通空间分析。",
    "link": "https://pan.baidu.com/s/1n1KTZsSuuYiyngPdx3k66g?pwd=grsw"
  },
  {
    "id": 79,
    "title": "中国30米分辨率坡度数据集",
    "category": "地形数据",
    "format": "TIF / 栅格",
    "description": "中国30米分辨率坡度数据集，适用于地形分析、坡度坡向计算、水文分析和空间建模。",
    "link": "https://pan.baidu.com/s/1V1loRXmtfHCZ2L7b1yNQQw?pwd=grsw"
  },
  {
    "id": 80,
    "title": "POI全国地级市",
    "category": "POI与活动数据",
    "format": "SHP / GeoJSON / OSM",
    "description": "POI全国地级市，适用于城市活力、兴趣点分布、空间行为和公共服务设施分析。",
    "link": "https://pan.baidu.com/s/1P556l1LEhEDq1tBVHKmytw?pwd=grsw"
  },
  {
    "id": 81,
    "title": "MOD13A2 EVI025 增强型植被指数EVI数据集",
    "category": "遥感生态",
    "format": "TIF / 栅格",
    "description": "MOD13A2 EVI025 增强型植被指数EVI数据集，适用于遥感生态监测、植被指数、夜间灯光、生态环境和自然资源分析。",
    "link": "https://pan.baidu.com/s/1MWtteHI6-WOz83lbokcVeA?pwd=grsw"
  },
  {
    "id": 82,
    "title": "LCZ地图自定义",
    "category": "城市空间",
    "format": "GIS数据",
    "description": "LCZ地图自定义，适用于城市形态、建成环境、建筑密度、功能空间和空间结构分析。",
    "link": "https://pan.baidu.com/s/1sF-w67CnWBHyAFbgJoFPYw?pwd=grsw"
  },
  {
    "id": 83,
    "title": "2024水库面osm",
    "category": "水文海洋",
    "format": "SHP / GeoJSON / OSM",
    "description": "2024水库面osm，适用于水系提取、水文过程、河湖海洋空间分析和生态环境研究。",
    "link": "https://pan.baidu.com/s/1PpU7_56MSGL7vWbNpZ8Gag?pwd=grsw"
  },
  {
    "id": 84,
    "title": "中国农业资源环境分区",
    "category": "其他数据",
    "format": "GIS数据",
    "description": "中国农业资源环境分区，可用于相关GIS空间分析、科研教学和数据整理。",
    "link": "https://pan.baidu.com/s/18s6x1j4EudPVREx5IWaCzw?pwd=grsw"
  },
  {
    "id": 85,
    "title": "2025年4月最新路网数据",
    "category": "交通数据",
    "format": "SHP / GeoJSON / OSM",
    "description": "2025年4月最新路网数据，适用于交通网络、道路可达性、公交地铁服务和城市交通空间分析。",
    "link": "https://pan.baidu.com/s/1MpcNaLCzDv0RfESS6PmNfQ?pwd=grsw"
  },
  {
    "id": 86,
    "title": "中国OSM数据（2025-04-02）",
    "category": "OSM基础数据",
    "format": "GIS数据",
    "description": "中国OSM数据（2025-04-02），适用于基础底图构建、道路建筑提取、城市空间分析和GIS制图。",
    "link": "https://pan.baidu.com/s/1usGZ2FpASqvsC9dVGmQdxw?pwd=grsw"
  },
  {
    "id": 87,
    "title": "2023年1km全球土壤可蚀性数据集",
    "category": "土壤数据",
    "format": "GIS数据",
    "description": "2023年1km全球土壤可蚀性数据集，适用于土壤类型、土壤侵蚀、农业生态和自然资源评价。",
    "link": "https://pan.baidu.com/s/16c9hingbTICdddSw4bhO2g?pwd=grsw"
  },
  {
    "id": 88,
    "title": "2021-2023年全国地表水水质监测数据集",
    "category": "水文海洋",
    "format": "GIS数据",
    "description": "2021-2023年全国地表水水质监测数据集，适用于水系提取、水文过程、河湖海洋空间分析和生态环境研究。",
    "link": "https://pan.baidu.com/s/1XP1soAs1hpCjlPD_yVQR3Q?pwd=grsw"
  },
  {
    "id": 89,
    "title": "高德人口迁徙数据(2018年6月-2023年12月)",
    "category": "人口社会经济",
    "format": "GIS数据",
    "description": "高德人口迁徙数据(2018年6月-2023年12月)，可用于人口分布、社会经济统计、城市发展和区域比较研究。",
    "link": "https://pan.baidu.com/s/1qQS9ttg1124VAKaWwBK_oQ?pwd=grsw"
  },
  {
    "id": 90,
    "title": "哨兵2号MGRS格网矢量文件",
    "category": "其他数据",
    "format": "PDF / 文档",
    "description": "哨兵2号MGRS格网矢量文件，可用于相关GIS空间分析、科研教学和数据整理。",
    "link": "https://pan.baidu.com/s/1a90T_E1dwaAXp_fOLZYY4Q?pwd=grsw"
  },
  {
    "id": 91,
    "title": "2025JCR更新",
    "category": "工具文档",
    "format": "GIS数据",
    "description": "2025JCR更新，适用于科研工具、资料整理、政策文档或学术资源查询。",
    "link": "https://pan.baidu.com/s/1XMxkaE9ZYvkEeCALEFgWkg?pwd=grsw"
  },
  {
    "id": 92,
    "title": "中央一号文件 pdf",
    "category": "工具文档",
    "format": "PDF / 文档",
    "description": "中央一号文件 pdf，适用于科研工具、资料整理、政策文档或学术资源查询。",
    "link": "https://pan.baidu.com/s/1Y9ANvjdTFD5ACMWBfPKumA?pwd=grsw"
  },
  {
    "id": 93,
    "title": "自动生成动态可视化ppt数据图表模板柱形图饼状折线统计分析素材",
    "category": "其他数据",
    "format": "Excel / 表格",
    "description": "自动生成动态可视化ppt数据图表模板柱形图饼状折线统计分析素材，可用于相关GIS空间分析、科研教学和数据整理。",
    "link": "https://pan.baidu.com/s/1QZl00lM_ds90pgiDsjouVg?pwd=grsw"
  },
  {
    "id": 94,
    "title": "2001~2020年我国分辨率500米MODIS土地覆盖数据",
    "category": "土地利用",
    "format": "TIF / 栅格",
    "description": "2001~2020年我国分辨率500米MODIS土地覆盖数据，可用于土地利用变化、城市扩张、生态空间识别和规划分析。",
    "link": "https://pan.baidu.com/s/1uLZXdhHNeVl9abyL7o9sUA?pwd=grsw"
  },
  {
    "id": 95,
    "title": "碳排放计算",
    "category": "气候环境",
    "format": "TIF / 栅格",
    "description": "碳排放计算，适用于气候变化、环境质量、热暴露、气象时空分析和城市环境研究。",
    "link": "https://pan.baidu.com/s/1901sqqHyILoDvULojMEu0g?pwd=grsw"
  },
  {
    "id": 96,
    "title": "2023年",
    "category": "其他数据",
    "format": "GIS数据",
    "description": "2023年，可用于相关GIS空间分析、科研教学和数据整理。",
    "link": "https://pan.baidu.com/s/14GwF-YZ9blFRWrvYdSdeIw?pwd=grsw"
  },
  {
    "id": 97,
    "title": "准确，31省份控制变量",
    "category": "人口社会经济",
    "format": "Excel / 表格",
    "description": "准确，31省份控制变量，可用于人口分布、社会经济统计、城市发展和区域比较研究。",
    "link": "https://pan.baidu.com/s/1w64OC5-zGdvApJIeRQZ2lw?pwd=grsw"
  },
  {
    "id": 98,
    "title": "风景名胜区.geojson",
    "category": "遥感生态",
    "format": "SHP / GeoJSON / OSM",
    "description": "风景名胜区.geojson，适用于遥感生态监测、植被指数、夜间灯光、生态环境和自然资源分析。",
    "link": "https://pan.baidu.com/s/1I70qwuBwl7E2kWvwn-4RBw?pwd=grsw"
  },
  {
    "id": 99,
    "title": "中国环境统计年鉴（1998-2023年）",
    "category": "人口社会经济",
    "format": "Excel / 表格",
    "description": "中国环境统计年鉴（1998-2023年），可用于人口分布、社会经济统计、城市发展和区域比较研究。",
    "link": "https://pan.baidu.com/s/1I-vxqG9WRC5B00dBDYkJ-w?pwd=grsw"
  },
  {
    "id": 100,
    "title": "2024河流湖泊",
    "category": "水文海洋",
    "format": "GIS数据",
    "description": "2024河流湖泊，适用于水系提取、水文过程、河湖海洋空间分析和生态环境研究。",
    "link": "https://pan.baidu.com/s/1X1JvJcCmHKsAYvC2PALoyg?pwd=grsw"
  },
  {
    "id": 101,
    "title": "2024土地利用矢量osm",
    "category": "土地利用",
    "format": "TIF / 栅格",
    "description": "2024土地利用矢量osm，可用于土地利用变化、城市扩张、生态空间识别和规划分析。",
    "link": "https://pan.baidu.com/s/1zeCK3ai2CrIVVFhjThasxw?pwd=grsw"
  },
  {
    "id": 102,
    "title": "1901-2023中国逐月均温",
    "category": "其他数据",
    "format": "GIS数据",
    "description": "1901-2023中国逐月均温，可用于相关GIS空间分析、科研教学和数据整理。",
    "link": "https://pan.baidu.com/s/1x8aPM0GWWv_Z3qhbva4wGQ?pwd=grsw"
  },
  {
    "id": 103,
    "title": "2000–2020年中国陆地生态系统年总初级生产力数据集",
    "category": "遥感生态",
    "format": "GIS数据",
    "description": "2000–2020年中国陆地生态系统年总初级生产力数据集，适用于遥感生态监测、植被指数、夜间灯光、生态环境和自然资源分析。",
    "link": "https://pan.baidu.com/s/1XpMH6ctlAaDBHfk7XVkoGQ?pwd=grsw"
  },
  {
    "id": 104,
    "title": "各省平均受教育年限与学历结构",
    "category": "人口社会经济",
    "format": "GIS数据",
    "description": "各省平均受教育年限与学历结构，可用于人口分布、社会经济统计、城市发展和区域比较研究。",
    "link": "https://pan.baidu.com/s/1JWlMMZCXa0x8Bk0W1VliVw?pwd=grsw"
  },
  {
    "id": 105,
    "title": "2006—2022年全国市政设施水平指标数据",
    "category": "人口社会经济",
    "format": "GIS数据",
    "description": "2006—2022年全国市政设施水平指标数据，可用于人口分布、社会经济统计、城市发展和区域比较研究。",
    "link": "https://pan.baidu.com/s/1kMgk1uOYdFAtDXNh2ekAKg?pwd=grsw"
  },
  {
    "id": 106,
    "title": "中国五批3610个国家级非物质文化遗产空间分布数据集IhChina 2006-2021",
    "category": "遥感生态",
    "format": "GIS数据",
    "description": "中国五批3610个国家级非物质文化遗产空间分布数据集IhChina 2006-2021，适用于遥感生态监测、植被指数、夜间灯光、生态环境和自然资源分析。",
    "link": "https://pan.baidu.com/s/1gdMg1GK4JHN7wbanje9egw?pwd=grsw"
  },
  {
    "id": 107,
    "title": "Google Open BuildingsV3",
    "category": "其他数据",
    "format": "GIS数据",
    "description": "Google Open BuildingsV3，可用于相关GIS空间分析、科研教学和数据整理。",
    "link": "https://pan.baidu.com/s/1XgMT-MQWf_K8FhnGprsdEw?pwd=grsw"
  },
  {
    "id": 108,
    "title": "Zotero6.036",
    "category": "工具文档",
    "format": "GIS数据",
    "description": "Zotero6.036，适用于科研工具、资料整理、政策文档或学术资源查询。",
    "link": "https://pan.baidu.com/s/1AxzO-ORCRBsY415bjyjcBA?pwd=grsw"
  },
  {
    "id": 109,
    "title": "中国OSM数据（2025-03-11）",
    "category": "OSM基础数据",
    "format": "GIS数据",
    "description": "中国OSM数据（2025-03-11），适用于基础底图构建、道路建筑提取、城市空间分析和GIS制图。",
    "link": "https://pan.baidu.com/s/1V702aVz0fb0rUID_SdgsCA?pwd=grsw"
  },
  {
    "id": 110,
    "title": "2014-2025年我国AOI兴趣面数据",
    "category": "城市空间",
    "format": "SHP / GeoJSON / OSM",
    "description": "2014-2025年我国AOI兴趣面数据，适用于城市形态、建成环境、建筑密度、功能空间和空间结构分析。",
    "link": "https://pan.baidu.com/s/1HdL0G7OHSSfKqPt4ehtPTQ?pwd=grsw"
  },
  {
    "id": 111,
    "title": "中国超300万人口大城市1米分辨率开放空间数据（2021年）",
    "category": "土地利用",
    "format": "TIF / 栅格",
    "description": "中国超300万人口大城市1米分辨率开放空间数据（2021年），可用于土地利用变化、城市扩张、生态空间识别和规划分析。",
    "link": "https://pan.baidu.com/s/1oje6A3yHy5Z7UflgLjD6fA?pwd=grsw"
  },
  {
    "id": 112,
    "title": "全国1-5级标准河流水系",
    "category": "水文海洋",
    "format": "SHP / GeoJSON / OSM",
    "description": "全国1-5级标准河流水系，适用于水系提取、水文过程、河湖海洋空间分析和生态环境研究。",
    "link": "https://pan.baidu.com/s/1VXevJGytTc3crRQErGVW1Q?pwd=grsw"
  },
  {
    "id": 113,
    "title": "首批国家公园矢量边界数据（附规划文本）",
    "category": "遥感生态",
    "format": "PDF / 文档",
    "description": "首批国家公园矢量边界数据（附规划文本），适用于遥感生态监测、植被指数、夜间灯光、生态环境和自然资源分析。",
    "link": "https://pan.baidu.com/s/1Atjz2atUgmKjQ_-vmNxB0g?pwd=grsw"
  },
  {
    "id": 114,
    "title": "2024商业osm",
    "category": "城市空间",
    "format": "SHP / GeoJSON / OSM",
    "description": "2024商业osm，适用于城市形态、建成环境、建筑密度、功能空间和空间结构分析。",
    "link": "https://pan.baidu.com/s/17ZWlS2csRL6SqMltfJjzjw?pwd=grsw"
  },
  {
    "id": 115,
    "title": "人口数人口密度",
    "category": "人口社会经济",
    "format": "TIF / 栅格",
    "description": "人口数人口密度，可用于人口分布、社会经济统计、城市发展和区域比较研究。",
    "link": "https://pan.baidu.com/s/1XOUJV-ogyq43Q69wfphKUQ?pwd=grsw"
  },
  {
    "id": 116,
    "title": "2025中科院分区",
    "category": "工具文档",
    "format": "GIS数据",
    "description": "2025中科院分区，适用于科研工具、资料整理、政策文档或学术资源查询。",
    "link": "https://pan.baidu.com/s/1mn4hGDSwGO7lh_GYi_iPoQ?pwd=grsw"
  },
  {
    "id": 117,
    "title": "人口密度landscan2000-2022-1km",
    "category": "人口社会经济",
    "format": "TIF / 栅格",
    "description": "人口密度landscan2000-2022-1km，可用于人口分布、社会经济统计、城市发展和区域比较研究。",
    "link": "https://pan.baidu.com/s/1kWgdzRe50QbEjdxhzd_KPg?pwd=grsw"
  },
  {
    "id": 118,
    "title": "基于联合国城市化程度框架的全球城市边界数据集",
    "category": "行政区划",
    "format": "SHP / GeoJSON / OSM",
    "description": "基于联合国城市化程度框架的全球城市边界数据集，适用于行政边界制图、空间统计、区域分析和城市规划研究。",
    "link": "https://pan.baidu.com/s/1Js5WZdPYMGTOYOrXjJYKyg?pwd=grsw"
  },
  {
    "id": 119,
    "title": "全国各省、市、县平均年降水（1950-2022年）",
    "category": "气候环境",
    "format": "TIF / 栅格",
    "description": "全国各省、市、县平均年降水（1950-2022年），适用于气候变化、环境质量、热暴露、气象时空分析和城市环境研究。",
    "link": "https://pan.baidu.com/s/1RD_kWLjqAJzngVe4uHJfXQ?pwd=grsw"
  },
  {
    "id": 120,
    "title": "全国、省、城市、农村、县域年鉴大全",
    "category": "其他数据",
    "format": "Excel / 表格",
    "description": "全国、省、城市、农村、县域年鉴大全，可用于相关GIS空间分析、科研教学和数据整理。",
    "link": "https://pan.baidu.com/s/1BOLdThwVrvsc1cCsMy6XBg?pwd=grsw"
  },
  {
    "id": 121,
    "title": "中国地面气象站观测数据（1942-2024年）",
    "category": "气候环境",
    "format": "GIS数据",
    "description": "中国地面气象站观测数据（1942-2024年），适用于气候变化、环境质量、热暴露、气象时空分析和城市环境研究。",
    "link": "https://pan.baidu.com/s/1ab1sI4aA3Uf4VZjbJio8jQ?pwd=grsw"
  },
  {
    "id": 122,
    "title": "2014年-2024年全国路网shp数据",
    "category": "交通数据",
    "format": "SHP / GeoJSON / OSM",
    "description": "2014年-2024年全国路网shp数据，适用于交通网络、道路可达性、公交地铁服务和城市交通空间分析。",
    "link": "https://pan.baidu.com/s/1F08Y00tHAT1voggUX42JZw?pwd=grsw"
  },
  {
    "id": 123,
    "title": "百度人口迁徙数据(2020年1月1日-2022年4月22日)",
    "category": "人口社会经济",
    "format": "GIS数据",
    "description": "百度人口迁徙数据(2020年1月1日-2022年4月22日)，可用于人口分布、社会经济统计、城市发展和区域比较研究。",
    "link": "https://pan.baidu.com/s/1WPhjPUcOYvVvvHhsC8vZIw?pwd=grsw"
  },
  {
    "id": 124,
    "title": "2025年4月公园绿地",
    "category": "土地利用",
    "format": "GIS数据",
    "description": "2025年4月公园绿地，可用于土地利用变化、城市扩张、生态空间识别和规划分析。",
    "link": "https://pan.baidu.com/s/1h9rLbZlgYIYtuIBMZP_D0g?pwd=grsw"
  },
  {
    "id": 125,
    "title": "全球城乡住区数据（2000-2020 tif 100m）",
    "category": "其他数据",
    "format": "TIF / 栅格",
    "description": "全球城乡住区数据（2000-2020 tif 100m），可用于相关GIS空间分析、科研教学和数据整理。",
    "link": "https://pan.baidu.com/s/1k9m6r5psMlJWX3660NxuFg?pwd=grsw"
  },
  {
    "id": 126,
    "title": "2003-2020年全球1km分辨率热浪暴露栅格数据",
    "category": "气候环境",
    "format": "TIF / 栅格",
    "description": "2003-2020年全球1km分辨率热浪暴露栅格数据，适用于气候变化、环境质量、热暴露、气象时空分析和城市环境研究。",
    "link": "https://pan.baidu.com/s/1IKI3uNNnAbZvIuOHicGNMw?pwd=grsw"
  },
  {
    "id": 127,
    "title": "中国自然地理分区数据集",
    "category": "其他数据",
    "format": "GIS数据",
    "description": "中国自然地理分区数据集，可用于相关GIS空间分析、科研教学和数据整理。",
    "link": "https://pan.baidu.com/s/1Hpmu3V9GwNWdZgDTAvGAiA?pwd=grsw"
  },
  {
    "id": 128,
    "title": "全球2000～2022年“类NPP-VIIRS”夜间灯光数据集",
    "category": "遥感生态",
    "format": "TIF / 栅格",
    "description": "全球2000～2022年“类NPP-VIIRS”夜间灯光数据集，适用于遥感生态监测、植被指数、夜间灯光、生态环境和自然资源分析。",
    "link": "https://pan.baidu.com/s/13pI0Hwm5t2rlD5-EvQpABw?pwd=grsw"
  },
  {
    "id": 129,
    "title": "1999—2023年我国地级市各类用地面积",
    "category": "土地利用",
    "format": "GIS数据",
    "description": "1999—2023年我国地级市各类用地面积，可用于土地利用变化、城市扩张、生态空间识别和规划分析。",
    "link": "https://pan.baidu.com/s/1XyIUmQqUoLW0zrOKmPTh4Q?pwd=grsw"
  },
  {
    "id": 130,
    "title": "中国季度植被指数（NDVI）空间分布数据集",
    "category": "遥感生态",
    "format": "TIF / 栅格",
    "description": "中国季度植被指数（NDVI）空间分布数据集，适用于遥感生态监测、植被指数、夜间灯光、生态环境和自然资源分析。",
    "link": "https://pan.baidu.com/s/1S6yl-5oQWRwjcsyFWWVnOA?pwd=grsw"
  },
  {
    "id": 131,
    "title": "中国OSM数据（2025-05-01）",
    "category": "OSM基础数据",
    "format": "GIS数据",
    "description": "中国OSM数据（2025-05-01），适用于基础底图构建、道路建筑提取、城市空间分析和GIS制图。",
    "link": "https://pan.baidu.com/s/1K4e_f2xY3B7yu3aEkSq0UA?pwd=grsw"
  },
  {
    "id": 132,
    "title": "中国省市县级矢量地图与南海诸岛十段线",
    "category": "行政区划",
    "format": "SHP / GeoJSON / OSM",
    "description": "中国省市县级矢量地图与南海诸岛十段线，适用于行政边界制图、空间统计、区域分析和城市规划研究。",
    "link": "https://pan.baidu.com/s/1YjYfam2-E8RlI2J0hc94qQ?pwd=grsw"
  },
  {
    "id": 133,
    "title": "2019年我国36个主要城市的高分辨率城市空地分布矢量数据",
    "category": "土地利用",
    "format": "TIF / 栅格",
    "description": "2019年我国36个主要城市的高分辨率城市空地分布矢量数据，可用于土地利用变化、城市扩张、生态空间识别和规划分析。",
    "link": "https://pan.baidu.com/s/1SvurreTN85IfBbzHwsOScQ?pwd=grsw"
  },
  {
    "id": 134,
    "title": "全国无人驾驶航空器适飞空域范围矢量",
    "category": "交通数据",
    "format": "SHP / GeoJSON / OSM",
    "description": "全国无人驾驶航空器适飞空域范围矢量，适用于交通网络、道路可达性、公交地铁服务和城市交通空间分析。",
    "link": "https://pan.baidu.com/s/1x3f_W6supqkFlpSjs5XQDQ?pwd=grsw"
  },
  {
    "id": 135,
    "title": "地级市公共数据开放平台明细数据（2012-2024年）",
    "category": "工具文档",
    "format": "GIS数据",
    "description": "地级市公共数据开放平台明细数据（2012-2024年），适用于科研工具、资料整理、政策文档或学术资源查询。",
    "link": "https://pan.baidu.com/s/1uaredu9yUW_J89S5NCAOCA?pwd=grsw"
  },
  {
    "id": 136,
    "title": "2024工业用地osm",
    "category": "土地利用",
    "format": "SHP / GeoJSON / OSM",
    "description": "2024工业用地osm，可用于土地利用变化、城市扩张、生态空间识别和规划分析。",
    "link": "https://pan.baidu.com/s/1frGuc9nD2fFSg2rvVXm55w?pwd=grsw"
  },
  {
    "id": 137,
    "title": "中国区域250米归一化植被指数数据集（2000-2023）",
    "category": "遥感生态",
    "format": "GIS数据",
    "description": "中国区域250米归一化植被指数数据集（2000-2023），适用于遥感生态监测、植被指数、夜间灯光、生态环境和自然资源分析。",
    "link": "https://pan.baidu.com/s/1byzt0Jk3t0XvZoIlN6YDSg?pwd=grsw"
  },
  {
    "id": 138,
    "title": "GDP逐年栅格数据",
    "category": "人口社会经济",
    "format": "TIF / 栅格",
    "description": "GDP逐年栅格数据，可用于人口分布、社会经济统计、城市发展和区域比较研究。",
    "link": "https://pan.baidu.com/s/1rh9JtGKq51oDYiLRtrSEjw?pwd=grsw"
  },
  {
    "id": 139,
    "title": "Landsat WRS2",
    "category": "其他数据",
    "format": "GIS数据",
    "description": "Landsat WRS2，可用于相关GIS空间分析、科研教学和数据整理。",
    "link": "https://pan.baidu.com/s/1E2LgVT1-P1Ga-HwyfVe3Rg?pwd=grsw"
  },
  {
    "id": 140,
    "title": "全球42种农作物生产数据",
    "category": "遥感生态",
    "format": "GIS数据",
    "description": "全球42种农作物生产数据，适用于遥感生态监测、植被指数、夜间灯光、生态环境和自然资源分析。",
    "link": "https://pan.baidu.com/s/1z501Prl5V5oPtovHPpu6vg?pwd=grsw"
  },
  {
    "id": 141,
    "title": "全球城市建成区边界矢量数据",
    "category": "城市空间",
    "format": "SHP / GeoJSON / OSM",
    "description": "全球城市建成区边界矢量数据，适用于城市形态、建成环境、建筑密度、功能空间和空间结构分析。",
    "link": "https://pan.baidu.com/s/1f8g0B_foJeIXzW0iL-ng7g?pwd=grsw"
  },
  {
    "id": 142,
    "title": "中国高技术产业统计年鉴（1995-2023年）",
    "category": "人口社会经济",
    "format": "Excel / 表格",
    "description": "中国高技术产业统计年鉴（1995-2023年），可用于人口分布、社会经济统计、城市发展和区域比较研究。",
    "link": "https://pan.baidu.com/s/1UgsPJvL-BBqAwAq914geGg?pwd=grsw"
  },
  {
    "id": 143,
    "title": "中国首套10米分辨率的建筑高度数据（tif格式）",
    "category": "城市空间",
    "format": "TIF / 栅格",
    "description": "中国首套10米分辨率的建筑高度数据（tif格式），适用于城市形态、建成环境、建筑密度、功能空间和空间结构分析。",
    "link": "https://pan.baidu.com/s/10A0sXjeXqxiH_czkf1W2Dg?pwd=grsw"
  },
  {
    "id": 144,
    "title": "基于世界土壤数据库（HWSD）的中国土壤数据集(v1.1)",
    "category": "土壤数据",
    "format": "GIS数据",
    "description": "基于世界土壤数据库（HWSD）的中国土壤数据集(v1.1)，适用于土壤类型、土壤侵蚀、农业生态和自然资源评价。",
    "link": "https://pan.baidu.com/s/10t7AvFXMHqMyLf7JlDWW2g?pwd=grsw"
  },
  {
    "id": 145,
    "title": "2023 土壤可侵蚀性因子",
    "category": "土壤数据",
    "format": "GIS数据",
    "description": "2023 土壤可侵蚀性因子，适用于土壤类型、土壤侵蚀、农业生态和自然资源评价。",
    "link": "https://pan.baidu.com/s/1C6ukHkPV3N6xxSfUjGamzw?pwd=grsw"
  },
  {
    "id": 146,
    "title": "2024railway-subway",
    "category": "其他数据",
    "format": "GIS数据",
    "description": "2024railway-subway，可用于相关GIS空间分析、科研教学和数据整理。",
    "link": "https://pan.baidu.com/s/1URrlaIrH-uDicj-fdS74BQ?pwd=grsw"
  },
  {
    "id": 147,
    "title": "各地级市逐日降水量shp(2000-2020)",
    "category": "气候环境",
    "format": "TIF / 栅格",
    "description": "各地级市逐日降水量shp(2000-2020)，适用于气候变化、环境质量、热暴露、气象时空分析和城市环境研究。",
    "link": "https://pan.baidu.com/s/12dItVKa3xJ4kCzPn4nN51Q?pwd=grsw"
  },
  {
    "id": 148,
    "title": "OSM基础数据（20260605）",
    "category": "OSM基础数据",
    "format": "GIS数据",
    "description": "OSM基础数据（20260605），适用于基础底图构建、道路建筑提取、城市空间分析和GIS制图。",
    "link": "https://pan.baidu.com/s/1Lbym8OQT0Ijg2JK7vyg2LQ?pwd=grsw"
  },
  {
    "id": 149,
    "title": "2023-10-9全球海岸线coastlines-split-4326",
    "category": "水文海洋",
    "format": "GIS数据",
    "description": "2023-10-9全球海岸线coastlines-split-4326，适用于水系提取、水文过程、河湖海洋空间分析和生态环境研究。",
    "link": "https://pan.baidu.com/s/1yXcLCMuTgy3qAcR_dTfs1Q?pwd=grsw"
  },
  {
    "id": 150,
    "title": "2019-2022全球光伏板数据集",
    "category": "遥感生态",
    "format": "GIS数据",
    "description": "2019-2022全球光伏板数据集，适用于遥感生态监测、植被指数、夜间灯光、生态环境和自然资源分析。",
    "link": "https://pan.baidu.com/s/1KonuHen4ze71B1gtI5dYnw?pwd=grsw"
  },
  {
    "id": 152,
    "title": "杰青优青名单（2012-2024年）",
    "category": "工具文档",
    "format": "Excel / 表格",
    "description": "杰青优青名单（2012-2024年），适用于科研工具、资料整理、政策文档或学术资源查询。",
    "link": "https://pan.baidu.com/s/1k9IfShWbuxFfLaVfes-dNg?pwd=grsw"
  },
  {
    "id": 153,
    "title": "2020年150m分辨率全球城市建筑高度数据集",
    "category": "城市空间",
    "format": "TIF / 栅格",
    "description": "2020年150m分辨率全球城市建筑高度数据集，适用于城市形态、建成环境、建筑密度、功能空间和空间结构分析。",
    "link": "https://pan.baidu.com/s/1jTquwuzierCeklO7i-N57A?pwd=grsw"
  },
  {
    "id": 154,
    "title": "2017-2023 年全球1093个大城市的工业用地栅格数据",
    "category": "土地利用",
    "format": "TIF / 栅格",
    "description": "2017-2023 年全球1093个大城市的工业用地栅格数据，可用于土地利用变化、城市扩张、生态空间识别和规划分析。",
    "link": "https://pan.baidu.com/s/16QMq2wCRuoe80iGnXAbQ3A?pwd=grsw"
  },
  {
    "id": 155,
    "title": "中国县域统计年鉴（2000-2024年）EXCEL版本",
    "category": "人口社会经济",
    "format": "Excel / 表格",
    "description": "中国县域统计年鉴（2000-2024年）EXCEL版本，可用于人口分布、社会经济统计、城市发展和区域比较研究。",
    "link": "https://pan.baidu.com/s/1nXapu0Arg2rhhkGbaOnzlA?pwd=grsw"
  },
  {
    "id": 156,
    "title": "2020年中国高精度耕地范围矢量数据",
    "category": "土地利用",
    "format": "SHP / GeoJSON / OSM",
    "description": "2020年中国高精度耕地范围矢量数据，可用于土地利用变化、城市扩张、生态空间识别和规划分析。",
    "link": "https://pan.baidu.com/s/1usbzN19GKdWCw9Xk4iOMNA?pwd=grsw"
  },
  {
    "id": 157,
    "title": "2024年5月全国水系数据",
    "category": "水文海洋",
    "format": "SHP / GeoJSON / OSM",
    "description": "2024年5月全国水系数据，适用于水系提取、水文过程、河湖海洋空间分析和生态环境研究。",
    "link": "https://pan.baidu.com/s/1Y6ADEkGQpMYddSh_gK9OJQ?pwd=grsw"
  },
  {
    "id": 158,
    "title": "中国土地利用1985-2022年30m分辨率",
    "category": "土地利用",
    "format": "TIF / 栅格",
    "description": "中国土地利用1985-2022年30m分辨率，可用于土地利用变化、城市扩张、生态空间识别和规划分析。",
    "link": "https://pan.baidu.com/s/1e8XJtJdl6bJ94FnK7PcaRg?pwd=grsw"
  },
  {
    "id": 159,
    "title": "2022年全球142个国家985个城市的街区划分矢量面数据",
    "category": "城市空间",
    "format": "SHP / GeoJSON / OSM",
    "description": "2022年全球142个国家985个城市的街区划分矢量面数据，适用于城市形态、建成环境、建筑密度、功能空间和空间结构分析。",
    "link": "https://pan.baidu.com/s/1t6dARnsAR_JFMfsY7P7lJQ?pwd=grsw"
  },
  {
    "id": 160,
    "title": "全国400多个气象站80年气象数据（1942-2021）",
    "category": "气候环境",
    "format": "GIS数据",
    "description": "全国400多个气象站80年气象数据（1942-2021），适用于气候变化、环境质量、热暴露、气象时空分析和城市环境研究。",
    "link": "https://pan.baidu.com/s/19dvFNu8i8BoZm6c3qvNAFQ?pwd=grsw"
  },
  {
    "id": 161,
    "title": "中国建筑物高度数据",
    "category": "城市空间",
    "format": "SHP / GeoJSON / OSM",
    "description": "中国建筑物高度数据，适用于城市形态、建成环境、建筑密度、功能空间和空间结构分析。",
    "link": "https://pan.baidu.com/s/1QCFGb-rePnFoenA81Q97uA?pwd=grsw"
  },
  {
    "id": 162,
    "title": "296个地级市GDP相关数据（2000-2023年）",
    "category": "人口社会经济",
    "format": "GIS数据",
    "description": "296个地级市GDP相关数据（2000-2023年），可用于人口分布、社会经济统计、城市发展和区域比较研究。",
    "link": "https://pan.baidu.com/s/1kFdGUFZlZLB6Q7s9n7Ia2g?pwd=grsw"
  },
  {
    "id": 163,
    "title": "OSM基础数据（2014 2024）",
    "category": "OSM基础数据",
    "format": "GIS数据",
    "description": "OSM基础数据（2014 2024），适用于基础底图构建、道路建筑提取、城市空间分析和GIS制图。",
    "link": "https://pan.baidu.com/s/1EEjuTY1rPleJ3hOGB4QhwQ?pwd=grsw"
  },
  {
    "id": 164,
    "title": "全球各国-经济距离数据（2005-2022）",
    "category": "人口社会经济",
    "format": "GIS数据",
    "description": "全球各国-经济距离数据（2005-2022），可用于人口分布、社会经济统计、城市发展和区域比较研究。",
    "link": "https://pan.baidu.com/s/1RJflciiQ3nvmGCh9XeVsmg?pwd=grsw"
  },
  {
    "id": 165,
    "title": "NOAA全球气象数据下载",
    "category": "气候环境",
    "format": "GIS数据",
    "description": "NOAA全球气象数据下载，适用于气候变化、环境质量、热暴露、气象时空分析和城市环境研究。",
    "link": "https://pan.baidu.com/s/1tkFvlnz87K7tzuFAKEJR8g?pwd=grsw"
  },
  {
    "id": 166,
    "title": "12.5mDEM数据",
    "category": "地形数据",
    "format": "TIF / 栅格",
    "description": "12.5mDEM数据，适用于地形分析、坡度坡向计算、水文分析和空间建模。",
    "link": "https://pan.baidu.com/s/1AJk6969AxTsLpYt7PIKJPg?pwd=grsw"
  },
  {
    "id": 167,
    "title": "中国科技统计年鉴（1991-2024年）",
    "category": "人口社会经济",
    "format": "Excel / 表格",
    "description": "中国科技统计年鉴（1991-2024年），可用于人口分布、社会经济统计、城市发展和区域比较研究。",
    "link": "https://pan.baidu.com/s/1bn6RxrgcSbmCgom4MRPSmQ?pwd=grsw"
  },
  {
    "id": 168,
    "title": "2024全国公交站osm",
    "category": "交通数据",
    "format": "SHP / GeoJSON / OSM",
    "description": "2024全国公交站osm，适用于交通网络、道路可达性、公交地铁服务和城市交通空间分析。",
    "link": "https://pan.baidu.com/s/1RRsRUgcnmEXwnQp6K6LC5Q?pwd=grsw"
  },
  {
    "id": 169,
    "title": "中国森林高度数据集30m分辨率",
    "category": "遥感生态",
    "format": "TIF / 栅格",
    "description": "中国森林高度数据集30m分辨率，适用于遥感生态监测、植被指数、夜间灯光、生态环境和自然资源分析。",
    "link": "https://pan.baidu.com/s/1FFWNSYaqRry2l4pRQzMavA?pwd=grsw"
  },
  {
    "id": 170,
    "title": "2024年建筑足迹数据",
    "category": "城市空间",
    "format": "SHP / GeoJSON / OSM",
    "description": "2024年建筑足迹数据，适用于城市形态、建成环境、建筑密度、功能空间和空间结构分析。",
    "link": "https://pan.baidu.com/s/1odfDCoZB3OdRDt0GGPtRow?pwd=grsw"
  },
  {
    "id": 171,
    "title": "中国建筑&建成区数据集合",
    "category": "城市空间",
    "format": "SHP / GeoJSON / OSM",
    "description": "中国建筑&建成区数据集合，适用于城市形态、建成环境、建筑密度、功能空间和空间结构分析。",
    "link": "https://pan.baidu.com/s/1zv_iIQDC3F0wGFOxoPLOsw?pwd=grsw"
  },
  {
    "id": 172,
    "title": "全国历史微博签到数据2019.12-2020.04",
    "category": "POI与活动数据",
    "format": "GIS数据",
    "description": "全国历史微博签到数据2019.12-2020.04，适用于城市活力、兴趣点分布、空间行为和公共服务设施分析。",
    "link": "https://pan.baidu.com/s/1SS-rchjg9DtPcDO83Sdfkw?pwd=grsw"
  },
  {
    "id": 173,
    "title": "2023全球人口landscan",
    "category": "人口社会经济",
    "format": "GIS数据",
    "description": "2023全球人口landscan，可用于人口分布、社会经济统计、城市发展和区域比较研究。",
    "link": "https://pan.baidu.com/s/1iS7fv_PujqMh8huQGZdS4A?pwd=grsw"
  },
  {
    "id": 174,
    "title": "中国碳排放1KM栅格数据1970-2022",
    "category": "气候环境",
    "format": "TIF / 栅格",
    "description": "中国碳排放1KM栅格数据1970-2022，适用于气候变化、环境质量、热暴露、气象时空分析和城市环境研究。",
    "link": "https://pan.baidu.com/s/16K12X6MMT1BdVjT-blaBsw?pwd=grsw"
  },
  {
    "id": 175,
    "title": "2025全国地铁线路",
    "category": "交通数据",
    "format": "GIS数据",
    "description": "2025全国地铁线路，适用于交通网络、道路可达性、公交地铁服务和城市交通空间分析。",
    "link": "https://pan.baidu.com/s/1_cAIBl4nKrjR5UmgPRmPYA?pwd=grsw"
  },
  {
    "id": 176,
    "title": "2024地铁站点osm",
    "category": "交通数据",
    "format": "SHP / GeoJSON / OSM",
    "description": "2024地铁站点osm，适用于交通网络、道路可达性、公交地铁服务和城市交通空间分析。",
    "link": "https://pan.baidu.com/s/1hzWV9IKrRl_YuxabIK760A?pwd=grsw"
  },
  {
    "id": 177,
    "title": "夏令营信息整合 疯狂学习GIS.xlsx",
    "category": "工具文档",
    "format": "Excel / 表格",
    "description": "夏令营信息整合 疯狂学习GIS.xlsx，适用于科研工具、资料整理、政策文档或学术资源查询。",
    "link": "https://pan.baidu.com/s/1_mH3sw32W_ACUmS_DPz2lw?pwd=grsw"
  },
  {
    "id": 178,
    "title": "1949-2023年中国统计年鉴",
    "category": "人口社会经济",
    "format": "Excel / 表格",
    "description": "1949-2023年中国统计年鉴，可用于人口分布、社会经济统计、城市发展和区域比较研究。",
    "link": "https://pan.baidu.com/s/1nWuW6s5PHzQ7HJjLBWI_tw?pwd=grsw"
  },
  {
    "id": 179,
    "title": "CHAP-PM2.5",
    "category": "气候环境",
    "format": "GIS数据",
    "description": "CHAP-PM2.5，适用于气候变化、环境质量、热暴露、气象时空分析和城市环境研究。",
    "link": "https://pan.baidu.com/s/1GO2nGYZV0bgdlVyjmE8ZpA?pwd=grsw"
  },
  {
    "id": 180,
    "title": "中国十年度及361个城市平均NDVI值统计数据集（250 m，1990-2020）",
    "category": "遥感生态",
    "format": "Excel / 表格",
    "description": "中国十年度及361个城市平均NDVI值统计数据集（250 m，1990-2020），适用于遥感生态监测、植被指数、夜间灯光、生态环境和自然资源分析。",
    "link": "https://pan.baidu.com/s/1x-jiCf9KFNlX7OYzGhb1kw?pwd=grsw"
  },
  {
    "id": 181,
    "title": "全国乡村旅游重点村数据（ExcelShp格式免费获取）",
    "category": "POI与活动数据",
    "format": "Excel / 表格",
    "description": "全国乡村旅游重点村数据（ExcelShp格式免费获取），适用于城市活力、兴趣点分布、空间行为和公共服务设施分析。",
    "link": "https://pan.baidu.com/s/1QVffMRhRKUNi2u5tlGk8Ig?pwd=grsw"
  },
  {
    "id": 182,
    "title": "分省土壤全国土壤全球土壤数据库（HWSD）分省处理数据集",
    "category": "土壤数据",
    "format": "GIS数据",
    "description": "分省土壤全国土壤全球土壤数据库（HWSD）分省处理数据集，适用于土壤类型、土壤侵蚀、农业生态和自然资源评价。",
    "link": "https://pan.baidu.com/s/1I3Pyf1MlNwoxXlc3a0EDJw?pwd=grsw"
  },
  {
    "id": 183,
    "title": "（05.27）全球兴趣点(POI)数据集",
    "category": "POI与活动数据",
    "format": "SHP / GeoJSON / OSM",
    "description": "（05.27）全球兴趣点(POI)数据集，适用于城市活力、兴趣点分布、空间行为和公共服务设施分析。",
    "link": "https://pan.baidu.com/s/1hNnN4dBj1umN7m3xoTTraA?pwd=grsw"
  },
  {
    "id": 184,
    "title": "矫正后的夜间灯光数据",
    "category": "遥感生态",
    "format": "TIF / 栅格",
    "description": "矫正后的夜间灯光数据，适用于遥感生态监测、植被指数、夜间灯光、生态环境和自然资源分析。",
    "link": "https://pan.baidu.com/s/1MX_Zohimyl68FQ7FxMctVg?pwd=grsw"
  },
  {
    "id": 185,
    "title": "2020年我国42个主要城市亚米级土地覆盖栅格数据",
    "category": "土地利用",
    "format": "TIF / 栅格",
    "description": "2020年我国42个主要城市亚米级土地覆盖栅格数据，可用于土地利用变化、城市扩张、生态空间识别和规划分析。",
    "link": "https://pan.baidu.com/s/1uiMlnNWdRt8v7LfiEHIt6w?pwd=grsw"
  },
  {
    "id": 186,
    "title": "人口迁徙规模数据-367个城市（2018-2023年）",
    "category": "人口社会经济",
    "format": "GIS数据",
    "description": "人口迁徙规模数据-367个城市（2018-2023年），可用于人口分布、社会经济统计、城市发展和区域比较研究。",
    "link": "https://pan.baidu.com/s/1METfaJEcoMUUuE6xAKT9aA?pwd=grsw"
  },
  {
    "id": 187,
    "title": "2024公共服务osm",
    "category": "OSM基础数据",
    "format": "SHP / GeoJSON / OSM",
    "description": "2024公共服务osm，适用于基础底图构建、道路建筑提取、城市空间分析和GIS制图。",
    "link": "https://pan.baidu.com/s/1g3vT4pHJ3aotFoMZw8xz6Q?pwd=grsw"
  },
  {
    "id": 188,
    "title": "EULUC-China-2018-土地功能利用图",
    "category": "土地利用",
    "format": "GIS数据",
    "description": "EULUC-China-2018-土地功能利用图，可用于土地利用变化、城市扩张、生态空间识别和规划分析。",
    "link": "https://pan.baidu.com/s/1hBzb6fRMUSuz4yDK67QHsQ?pwd=grsw"
  }
];
