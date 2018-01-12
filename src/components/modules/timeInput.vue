<template>
  <div class="time-input">
    <div class="time-show">
      <i class="fa fa-calendar"></i><input type="text">
    </div>
    <div class="time-card">
      <div class="day-show" v-if="day">
        <div class="day-title">
          <button>
            <i class="fa fa-angle-double-left"></i>
          </button>
          <button class="gap">
            <i class="fa fa-angle-left"></i>
          </button>
          <p>
            <span @click="getYear">{{nowTime.year}} 年</span>
            <span @click="getMonth">{{nowTime.month}} 月</span>
          </p>
          <button class="gap">
            <i class="fa fa-angle-right"></i>
          </button>
          <button>
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
          <dd class="none" v-for="li in prevMonth" :key="li.index">{{li}}</dd>
          <dd v-for="(li,index) in nowMonth" :key="li.index" :class="{active:index+1===nowDay}">{{li}}</dd>
          <dd class="none" v-for="li in nextMonth" :key="li.index">{{li}}</dd>
        </dl>
      </div>
      <div class="month-show" v-if="month">
        <div class="month-title">
          <button>
            <i class="fa fa-angle-double-left"></i>
          </button>
          <p>
            <span>2000 年</span>
          </p>
          <button>
            <i class="fa fa-angle-double-right"></i>
          </button>
        </div>
        <dl>
          <dd>一月</dd>
          <dd>二月</dd>
          <dd>三月</dd>
          <dd>四月</dd>
          <dd>五月</dd>
          <dd>六月</dd>
          <dd>七月</dd>
          <dd>八月</dd>
          <dd>九月</dd>
          <dd>十月</dd>
          <dd>十一月</dd>
          <dd>十二月</dd>
        </dl>
      </div>
      <div class="year-show" v-if="year">
        <div class="year-title">
          <button>
            <i class="fa fa-angle-double-left"></i>
          </button>
          <p>
            <span>2000 年</span> -
            <span>2009 年</span>
          </p>
          <button>
            <i class="fa fa-angle-double-right"></i>
          </button>
        </div>
        <dl>
          <dd class="active">2000</dd>
          <dd>2001</dd>
          <dd>2002</dd>
          <dd>2003</dd>
          <dd>2004</dd>
          <dd>2005</dd>
          <dd>2006</dd>
          <dd>2007</dd>
          <dd>2008</dd>
          <dd>2009</dd>
        </dl>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  data () {
    return {
      day: true,
      month: false,
      year: false,
      nowDay: 0,
      nowTime: {},
      nowMonth: [],
      prevMonth: [1, 2, 3, 4, 5],
      nextMonth: [1, 2, 3, 4]
    }
  },
  methods: {
    getYear () {
      this.year = true
      this.month = false
      this.day = false
    },
    getMonth () {
      this.year = false
      this.month = true
      this.day = false
    }
  },
  created () {
    // 默认日期
    this.nowTime.year = moment().format('YYYY')
    this.nowTime.month = moment().format('MM')
    // 当前日期
    this.nowDay = parseInt(moment().format('DD'))
    // 默认日历
    let year = moment().format('YYYY')
    let month = moment().format('MM')
    var d = new Date(year, month, 0)
    let daycount = d.getDate()
    var dayArry = []
    for (var k = 1; k <= daycount; k++) {
      dayArry.push(k)
    }
    this.nowMonth = dayArry
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
      padding: 0 30px;
      span {
        margin: 0 5px;
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
