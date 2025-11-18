const express = require('express');
const line = require('@line/bot-sdk');

// 環境変数から読み込み
const config = {
  channelSecret: process.env.CHANNEL_SECRET,
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN
};

const client = new line.Client(config);
const app = express();

// Webhookエンドポイント
app.post('/webhook', line.middleware(config), (req, res) => {
  Promise.all(req.body.events.map(handleEvent))
    .then((result) => res.json(result))
    .catch((err) => {
      console.error(err);
      res.status(500).end();
    });
});

// イベント処理
function handleEvent(event) {
  if (event.type === 'postback') {
    const data = event.postback.data;
    
    if (data === 'action=flex1') {
      return client.replyMessage(event.replyToken, getFlexMessage1());
    } else if (data === 'action=flex2') {
      return client.replyMessage(event.replyToken, getFlexMessage2());
    } else if (data === 'action=flex3') {
      return client.replyMessage(event.replyToken, getFlexMessage3());
    } else if (data === 'action=flex4') {
      return client.replyMessage(event.replyToken, getFlexMessage4());
    } else if (data === 'action=flex5') {
      return client.replyMessage(event.replyToken, getFlexMessage5());
    } else if (data === 'action=flex6') {
      return client.replyMessage(event.replyToken, getFlexMessage6());
    }
  }
  
  return Promise.resolve(null);
}

// Flex Message 1（後であなたのJSONに置き換えます）
function getFlexMessage1() {
  return {
    type: 'flex',
    altText: 'メニュー1',
    contents: {
      type: 'bubble',
      body: {
        type: 'box',
        layout: 'vertical',
        contents: [
          {
            type: 'text',
            text: 'メニュー1の内容',
            weight: 'bold',
            size: 'xl'
          }
        ]
      }
    }
  };
}

function getFlexMessage2() {
  return {
    type: 'flex',
    altText: 'メニュー2',
    contents: {
      type: 'bubble',
      body: {
        type: 'box',
        layout: 'vertical',
        contents: [
          {
            type: 'text',
            text: 'メニュー2の内容',
            weight: 'bold',
            size: 'xl'
          }
        ]
      }
    }
  };
}

function getFlexMessage3() {
  return {
    type: 'flex',
    altText: 'メニュー3',
    contents: {
      type: 'bubble',
      body: {
        type: 'box',
        layout: 'vertical',
        contents: [
          {
            type: 'text',
            text: 'メニュー3の内容',
            weight: 'bold',
            size: 'xl'
          }
        ]
      }
    }
  };
}

function getFlexMessage4() {
  return {
    type: 'flex',
    altText: 'メニュー4',
    contents: {
      type: 'bubble',
      body: {
        type: 'box',
        layout: 'vertical',
        contents: [
          {
            type: 'text',
            text: 'メニュー4の内容',
            weight: 'bold',
            size: 'xl'
          }
        ]
      }
    }
  };
}

function getFlexMessage5() {
  return {
    type: 'flex',
    altText: 'メニュー5',
    contents: {
      type: 'bubble',
      body: {
        type: 'box',
        layout: 'vertical',
        contents: [
          {
            type: 'text',
            text: 'メニュー5の内容',
            weight: 'bold',
            size: 'xl'
          }
        ]
      }
    }
  };
}

function getFlexMessage6() {
  return {
    type: 'flex',
    altText: 'メニュー6',
    contents: {
      type: 'bubble',
      body: {
        type: 'box',
        layout: 'vertical',
        contents: [
          {
            type: 'text',
            text: 'メニュー6の内容',
            weight: 'bold',
            size: 'xl'
          }
        ]
      }
    }
  };
}

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`listening on ${port}`);
});
