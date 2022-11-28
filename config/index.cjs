/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wxd856f9843b348406',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: 'c3a6caf839e3a2cfd1a256fc93b09b94',

  // 默认所在省份, USERS 中没填的话, 会默认拿这里的省份
  PROVINCE: '苏州',
  // 默认所在城市, USERS 中没填的话, 会默认拿这里的城市
  CITY: '吴江区',

  USERS: [
    {
      // 想要发送的人的名字
      name: '小丁',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'o87ad6UXQO1gkbgAmXvn0kntre94',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'XgNfJx09XriFb80xoYFWeTsqn2YK0-18VjXEoRoZy6s',

      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '05-28',
      horoscopeDateType: '今日',
      festivals: [
        {
          type: '生日', name: '宝贝丁', year: '2000', date: '05-28',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '港都康', year: '1998', date: '12-23',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2022-10-30' },
        // 跨年
        { keyword: 'new_date', date: '2023-01-01' },
      ],
    },
    {
      // 想要发送的人的名字
      name: '小丁',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'o87ad6UXQO1gkbgAmXvn0kntre94',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'Og2VAZ0dMlAOZ_CIxWNHOVx0otRQKp9RgzSvbbsmXro',
    },
  ],

  TIAN_API: {
    // 天行API KEY，如果使用天行API则需要填写此项
    key: '391d6fb75940f8424fd39714dfd65929',
    
    /** 天行API相关，需要config中配置 TIAN_API_KEY  */
    // 早安心语, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    morningGreeting: true,
  
    // 晚安心语, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    eveningGreeting: false,
  
    // 天行天气（展示未来N天，最多7天）, 填 0 则不使用，按需关闭不使用的功能可以提高运行速度
    weather: 1,
  
    // 全网热搜榜（展示N条，最多30条）, 填 0 则不使用，按需关闭不使用的功能可以提高运行速度
    networkHot: 0,
  
    // 全网热搜榜展示类型，默认展示概要信息: ['title': 仅展示标题, 'default': 展示概要信息]
    networkHotType: 'default',
  },



  SWITCH: {
    /** 每日天气 */
    // 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    weather: false,

    /** 节假日 */
    // 下一休息日综合提醒, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    holidaytts: true,

    /** 每日N句 */
    // 金山每日一句, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    CIBA: false,
    
    // 每日一言, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    oneTalk: false,
    
    // 土味情话(彩虹屁), 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    earthyLoveWords: false,
    
    // 朋友圈文案, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    momentCopyrighting: false,
    
    // 毒鸡汤, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    poisonChickenSoup: false,
    
    // 古诗古文, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    poetry: false,

    /** 星座运势 */
    // 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    horoscope: true,
  
    /** 生日消息和节日消息 */
    // 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    birthdayMessage: true,
  
    /** 学生课表 */
    // 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    courseSchedule: false,
  },



  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: '',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'o87ad6S5slgwaLMsr2SKduTkCVQU',
    }
  ],

}

module.exports = USER_CONFIG

