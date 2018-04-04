<template>
  <scroll ref="listview" id='listView' class="listview" :data="data">
      <div>
        <ul>
            <li ref="listGroup" class="list-group" v-for="(group, index) in data" :key="index">
                <h2 class="list-group-title">{{group.title}}</h2>
                <ul>
                    <li class="list-group-item" v-for="(item, index) in group.items" :key="index">
                        <img class="avatar" v-lazy="item.avator" alt="">
                        <span class="name">{{item.name}}</span>
                    </li>
                </ul>
            </li>
        </ul>
      </div>
      <div class="list-shortcut">
          <ul>
              <li class="item" v-for="(item, index) in listShortcut" 
              :key="index" 
              :data-index="index"
              @touchstart="onTouchStart"
              @touchmove.stop.prevent="onTouchMove">
                  {{item}}
              </li>
          </ul>
      </div>
      
  </scroll>
</template>

<script>
import Scroll from "../../base/scroll/scroll";
const ANCHOR_HEIGHT = 18;

export default {
  name: "listView",
  components: {
    Scroll
  },
  props: {
    data: {
      type: Array,
      default: []
    }
  },
  created() {
    this.touch = {};
  },
  mounted() {
    // this.listGroup = this.listGroup();
  },
  computed: {
    listShortcut() {
      return this.data.map(item => {
        return item.title.substr(0, 1);
      });
    }
  },
  methods: {
    getIndex(el, key, val) {
      let pre = "data-",
        attr = pre + key;

      if (val) {
        return el.setAttribute(attr);
      } else {
        return el.getAttribute(attr);
      }
    },
    onTouchStart(e) {
      let index = this.getIndex(e.target, "index"),
        targetEle = this.$refs.listGroup[index];
      let touches = e.touches[0];
      this.touch.firstIndex = index;
      this.touch.y1 = touches.pageY;

      this.$refs.listview.scrollToElement(targetEle, 0);
    },
    onTouchMove(e) {
      let touches = e.touches[0];
      this.touch.y2 = touches.pageY;
      let delta = ((this.touch.y2 - this.touch.y1) / ANCHOR_HEIGHT) | 0;
      let index = this.touch.firstIndex - 0 + delta,
        targetEle = this.$refs.listGroup[index];

      this.$refs.listview.scrollToElement(targetEle, 0);
    }
  }
};
</script>
<style lang='stylus' scoped>
@import '../../common/stylus/variable.styl';

.listview {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: $color-background;

    .list-group {
        padding-bottom: 30px;

        .list-group-title {
            height: 30px;
            line-height: 30px;
            padding-left: 20px;
            font-size: $font-size-small;
            color: $color-text-l;
            background: $color-highlight-background;
        }

        .list-group-item {
            display: flex;
            align-items: center;
            padding: 20px 0 0 30px;

            .avatar {
                width: 50px;
                height: 50px;
                border-radius: 50%;
            }

            .name {
                margin-left: 20px;
                color: $color-text-l;
                font-size: $font-size-medium;
            }
        }
    }

    .list-shortcut {
        position: absolute;
        z-index: 30;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        width: 20px;
        padding: 20px 0;
        border-radius: 10px;
        text-align: center;
        background: $color-background-d;
        font-family: Helvetica;

        .item {
            padding: 3px;
            line-height: 1;
            color: $color-text-l;
            font-size: $font-size-small;

            &.current {
                color: $color-theme;
            }
        }
    }

    .list-fixed {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;

        .fixed-title {
            height: 30px;
            line-height: 30px;
            padding-left: 20px;
            font-size: $font-size-small;
            color: $color-text-l;
            background: $color-highlight-background;
        }
    }

    .loading-container {
        position: absolute;
        width: 100%;
        top: 50%;
        transform: translateY(-50%);
    }
}
</style>