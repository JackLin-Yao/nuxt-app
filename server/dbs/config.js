export default {
  dbs: 'mongodb://127.0.0.1:27017/user',
  redis: {
    get host() {
      return '127.0.0.1';
    },
    get port() {
      return 6379;
    }
  }, smtp: {
    get host() {
      return 'smtp.qq.com'
    },
    get user() {
      return '1471122902@qq.com'
    },
    get pass() {
      return 'clczsrtvpvhjidfh'
    },
    get code() {
      return () => {
        return Math.random().toString(16).slice(2, 6).toUpperCase()
      }
    }
  }
}
