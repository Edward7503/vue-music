
<template>
  <div id='singer'>
      <list-view :data="singerList"></list-view>
  </div>
</template>

<script>
import { getSingerList } from "../../api/singerUtils";
import { ERR_OK } from "../../api/config";
import Singer from "../../common/js/singer";
import ListView from "../../base/listView/listView";

const HOT_LEN = 10,
  HOT_NAME = "热门";
export default {
  name: "singer",
  components: {
    ListView
  },
  data() {
    return {
      singerList: []
    };
  },
  created() {
    this._getSingerList();
  },
  methods: {
    _getSingerList() {
      getSingerList().then(res => {
        if (res.code === ERR_OK) {
          this.singerList = this._nomalizeSingerList(res.data.list);
        }
      });
    },
    _nomalizeSingerList(singerList) {
      // map: { hot: {title: '', items: []}, A: {title: '', items: []}, ... }
      let map = {
        hot: {
          title: HOT_NAME,
          items: []
        }
      };
      // hot.items
      singerList.map((item, index) => {
        if (index < HOT_LEN) {
          map.hot.items.push(
            new Singer({
              id: item.Fsinger_mid,
              name: item.Fsinger_name
            })
          );
        }
        // 映射: A - {...}
        const key = item.Findex;
        if (!map[key]) {
          map[key] = {
            title: key,
            items: []
          };
        }
        // map[key].items
        map[key].items.push(
          new Singer({
            id: item.Fsinger_mid,
            name: item.Fsinger_name
          })
        );
      });

      // 排序index:  hot - A - Z
      let hot = [],
        ret = [];
      for (let key in map) {
        let val = map[key];
        if (val.title.match(/[a-zA-Z]/)) {
          ret.push(val);
        } else if (val.title === HOT_NAME) {
          hot.push(val);
        }
      }

      ret.sort((a, b) => {
        return a.title.charCodeAt(0) - b.title.charCodeAt(0);
      });
      console.log(hot.concat(ret));

      return hot.concat(ret);
    }
  }
};
</script>
<style lang='stylus' scoped>

#singer {
  position: fixed;
  top: 88px;
  bottom: 0;
  width: 100%;
}
</style>