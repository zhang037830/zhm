angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: '张洪铭',
    lastText: '欢迎使用我的APP',
    face: 'img/zhm.png'
  }, {
    id: 1,
    name: '钟雪',
    lastText: '253486826',
    face: 'img/zx.jpg'
  }, {
    id: 2,
    name: '刘洋',
    lastText: '1551853910',
    face: 'img/ly.png'
  }, {
    id: 3,
    name: '赵鑫',
    lastText: '912111841',
    face: 'img/zhx.png'
  }, {
    id: 4,
    name: '任一鸣',
    lastText: '772973449',
    face: 'img/rym.png'
  }, {
    id: 5,
    name: '姜雪健',
    lastText: '1184455902',
    face: 'img/jxj.png'
  }, {
    id: 6,
    name: '闫胜仁',
    lastText: '821521880',
    face: 'img/ysr.jpg'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
