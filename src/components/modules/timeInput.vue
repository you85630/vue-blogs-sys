<template>
  <div class="time-input">
    <div class="time-show">
      <i class="fa fa-calendar"></i><input type="text" v-model="timeShow" @click="showTimeCard">
    </div>
    <div class="time-card" v-if="timeCard">
      <div class="day-show" v-if="day">
        <div class="day-title">
          <button @click="getPrevYear">
            <i class="fa fa-angle-double-left"></i>
          </button>
          <button class="gap" @click="getPrevMonth">
            <i class="fa fa-angle-left"></i>
          </button>
          <p>
            <span @click="openYear">{{nowTime.year}} 年</span>
            <span @click="getYear(nowTime.year)">{{nowTime.month}} 月</span>
          </p>
          <button class="gap" @click="getNextMonth">
            <i class="fa fa-angle-right"></i>
          </button>
          <button @click="getNextYear">
            <i class="fa fa-angle-double-right"></i>
          </button>
        </div>
        <dl>
          <dt>日</dt>
          <dt>一</dt>
          <dt>二</dt>
          <dt>三</dt>
          <dt>四</dt>
          <dt>五</dt>
          <dt>六</dt>
        </dl>
        <dl>
          <dd class="none" v-for="li in prevMonth">{{li}}</dd>
          <dd v-for="(li,index) in nowMonth" :class="{active:index+1===nowTime.day}" @click="getDay(index)">{{li}}</dd>
          <dd class="none" v-for="li in nextMonth">{{li}}</dd>
        </dl>
      </div>
      <div class="month-show" v-if="month">
        <div class="month-title">
          <button @click="getPrevYear">
            <i class="fa fa-angle-double-left"></i>
          </button>
          <p>
            <span @click="openYear">{{nowTime.year}} 年</span>
          </p>
          <button @click="getNextYear">
            <i class="fa fa-angle-double-right"></i>
          </button>
        </div>
        <dl>
          <dd v-for="(li,index) in monthList" :class="{active:index+1===nowTime.month}" @click="getMonth(index)">{{li}}</dd>
        </dl>
      </div>
      <div class="year-show" v-if="year">
        <div class="year-title">
          <button @click="prevScreenYear">
            <i class="fa fa-angle-double-left"></i>
          </button>
          <p>
            <span>{{screenYear.first}} 年 - {{screenYear.last}} 年</span>
          </p>
          <button @click="nextScreenYear">
            <i class="fa fa-angle-double-right"></i>
          </button>
        </div>
        <dl>
          <dd v-for="(li,index) in intervalYear" :class="{active:index===screenYear.now}" @click="getYear(li)">{{li}}</dd>
        </dl>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      timeCard: false,
      day: false,
      month: false,
      year: false,
      timeShow: '',
      nowTime: {},
      nowMonth: [],
      prevMonth: [],
      nextMonth: [],
      screenYear: {},
      intervalYear: [],
      monthList: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
    }
  },
  methods: {
    showTimeCard () {
      this.timeCard = true
      this.day = true
    },
    // 上一年
    getPrevYear () {
      this.nowTime.year = this.nowTime.year - 1
      this.nowTime.day = ''
    },
    // 上一月
    getPrevMonth () {
      if (this.nowTime.month === 1) {
        this.nowTime.month = 12
        this.nowTime.year = this.nowTime.year - 1
      } else {
        this.nowTime.month = this.nowTime.month - 1
      }
      this.nowTime.day = ''
    },
    // 下一年
    getNextYear () {
      this.nowTime.year = this.nowTime.year + 1
      this.nowTime.day = ''
    },
    // 下一月
    getNextMonth () {
      if (this.nowTime.month === 12) {
        this.nowTime.month = 1
        this.nowTime.year = this.nowTime.year + 1
      } else {
        this.nowTime.month = this.nowTime.month + 1
      }
      this.nowTime.day = ''
    },
    // 打开年份
    openYear () {
      this.year = true
      this.month = false
      this.day = false
    },
    // 获取年
    getYear (key) {
      this.year = false
      this.month = true
      this.day = false
      this.nowTime.year = key
    },
    // 获取月
    getMonth (key) {
      this.year = false
      this.month = false
      this.day = true
      this.nowTime.month = key + 1
    },
    // 获取日
    getDay (key) {
      this.year = false
      this.month = false
      this.day = false
      this.timeCard = false
      this.nowTime.day = key + 1
      this.timeShow = this.nowTime.year + '-' + this.nowTime.month + '-' + this.nowTime.day
    },
    // 年份区间选择-前10年
    prevScreenYear () {
      this.screenYear = {
        first: this.screenYear.first - 10,
        last: this.screenYear.last - 10
      }
    },
    // 年份区间选择-后10年
    nextScreenYear () {
      this.screenYear = {
        first: this.screenYear.first + 10,
        last: this.screenYear.last + 10
      }
    }
  },
  created () {
    let date = new Date()
    // 默认日期,当前日期
    this.nowTime = {
      year: date.getFullYear(),
      month: date.getMonth() + 1,
      day: date.getDate()
    }
    // 默认年筛选
    let nowYear
    if (this.nowTime.year % 10 === 0) {
      nowYear = this.nowTime.year
    } else {
      nowYear = this.nowTime.year - this.nowTime.year % 10
    }
    this.screenYear = {
      first: nowYear,
      last: nowYear + 9
    }
  },
  watch: {
    nowTime: {
      handler (val) {
        let year = val.year
        let month = val.month
        // 切换后当月天数
        let now = new Date(year, month, 0)
        let daycount = now.getDate()
        let nowList = []
        for (let i = 1; i <= daycount; i++) {
          nowList.push(i)
        }
        this.nowMonth = nowList
        // 切换后上月天数
        let prevyear = 0
        let prevmonth = 0
        if (month === 1) {
          prevyear = year - 1
          prevmonth = 12
        } else {
          prevyear = year
          prevmonth = month - 1
        }
        let nowWeek = new Date(now.setDate(1))
        let prev = new Date(prevyear, prevmonth, 0)
        let prevcount = prev.getDate()
        let prevList = []
        for (let i = 1; i <= prevcount; i++) {
          prevList.push(i)
        }
        let week = nowWeek.getDay()
        if (week === 0) {
          this.prevMonth = []
        } else {
          this.prevMonth = prevList.slice(-week)
        }
        // 切换后下月天数
        let nextyear = 0
        let nextmonth = 0
        if (month === 12) {
          nextyear = year + 1
          nextmonth = 1
        } else {
          nextyear = year
          nextmonth = month + 1
        }
        let nextList = []
        let next = new Date(nextyear, nextmonth, 0)
        let nextcount = next.getDate()
        for (let i = 1; i <= nextcount; i++) {
          nextList.push(i)
        }
        let nextday = 35 - this.prevMonth.length - this.nowMonth.length
        if (nextday < 0) {
          this.nextMonth = nextList.slice(0, nextday + 7)
        } else {
          this.nextMonth = nextList.slice(0, nextday)
        }

        // 判断当前时间
        if (!this.timeShow) {
          val.day = this.nowTime.day
        }
      },
      deep: true
    },
    screenYear: {
      handler (val) {
        let year = val.first
        // 默认年区间
        let yearList = []
        for (let i = 0; i < 10; i++) {
          year = year + 1
          yearList.push(year - 1)
        }
        this.intervalYear = yearList

        // 默认年份,当前年份
        let yearNow = new Date().getFullYear()
        let Index = this.intervalYear.findIndex(e => e === yearNow)
        let nowYear = this.intervalYear[Index]
        // 判断当前时间
        if (yearNow === nowYear) {
          val.now = Index
        } else {
          val.now = ''
        }
      },
      deep: true
    }
  }
}
</script>

<style lang="scss" scoped>
.time-input {
  position: relative;
}
.time-show {
  box-sizing: border-box;
  padding: 0.8vw 1vw;
  border: 1px solid #eee;
  border-radius: 2px;
  input {
    margin-left: 1vw;
    width: 20vw;
    border: none;
    font-size: 1vw;
  }
  i {
    font-size: 12px;
  }
}
.time-card {
  position: absolute;
  z-index: 3;
  box-sizing: border-box;
  margin-top: 10px;
  padding: 20px 20px 10px;
  width: 340px;
  border: 1px solid #eee;
  border-radius: 2px;
  background-color: #fff;
  box-shadow: 0 0 8px #eee;
  &:before,
  &:after {
    position: absolute;
    left: 4vw;
    width: 0;
    height: 0;
    border-width: 0 12px 8px 12px;
    border-style: solid;
    content: '';
  }
  &:before {
    top: -8px;
    border-color: transparent transparent #eee transparent;
  }
  &:after {
    top: -7px;
    border-color: transparent transparent #fff transparent;
  }
}
.day-show {
  .day-title {
    padding-bottom: 10px;
    text-align: center;
    button,
    p {
      display: inline-block;
      vertical-align: middle;
    }
    button {
      padding: 0 5px;
      border: none;
      font-size: 16px;
      &:hover {
        color: #2d8cf0;
      }
    }
    .gap {
      margin: 0 11px;
    }
    p {
      padding: 0 32px;
      span {
        display: inline-block;
        width: 60px;
        font-size: 16px;
        cursor: pointer;
        &:hover {
          color: #2d8cf0;
        }
      }
    }
  }
  dl {
    font-size: 0;
    dt,
    dd {
      display: inline-block;
      padding: 10px 0;
      width: 42px;
      text-align: center;
      font-size: 12px;
    }
    dt {
      margin-bottom: 10px;
      border-bottom: 1px solid #eee;
    }
    dd {
      cursor: pointer;
      &:hover {
        color: #2d8cf0;
      }
    }
    .active {
      margin: 0 9px;
      padding: 5px 0;
      width: 24px;
      border-radius: 50px;
      background-color: #2d8cf0;
      color: #fff;
      &:hover {
        color: #fff;
      }
    }
    .none {
      color: #ccc;
      &:hover {
        color: #ccc;
      }
    }
  }
}
.month-show {
  .month-title {
    padding-bottom: 10px;
    border-bottom: 1px solid #eee;
    button,
    p {
      display: inline-block;
      vertical-align: middle;
    }
    button {
      padding: 0 5px;
      border: none;
      font-size: 16px;
      &:hover {
        color: #2d8cf0;
      }
    }
    p {
      padding: 0 96px;
      font-size: 16px;
      span {
        margin: 0 5px;
        cursor: pointer;
        &:hover {
          color: #2d8cf0;
        }
      }
    }
  }
  dl {
    padding-bottom: 30px;
    font-size: 0;
    dd {
      display: inline-block;
      padding-top: 40px;
      width: 25%;
      vertical-align: middle;
      text-align: center;
      font-size: 12px;
      cursor: pointer;
      &:hover {
        color: #2d8cf0;
      }
    }
    .active {
      color: #2d8cf0;
    }
  }
}
.year-show {
  .year-title {
    padding-bottom: 10px;
    border-bottom: 1px solid #eee;
    button,
    p {
      display: inline-block;
      vertical-align: middle;
    }
    button {
      padding: 0 5px;
      border: none;
      font-size: 16px;
      &:hover {
        color: #2d8cf0;
      }
    }
    p {
      padding: 0 55px;
      font-size: 16px;
      span {
        margin: 0 5px;
        cursor: pointer;
        &:hover {
          color: #2d8cf0;
        }
      }
    }
  }
  dl {
    padding-bottom: 30px;
    font-size: 0;
    dd {
      display: inline-block;
      padding-top: 40px;
      width: 25%;
      vertical-align: middle;
      text-align: center;
      font-size: 12px;
      cursor: pointer;
      &:hover {
        color: #2d8cf0;
      }
    }
    .active {
      color: #2d8cf0;
    }
  }
}
</style>
