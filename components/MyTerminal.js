import Terminal from 'terminal-in-react';

export default class MyTerminal extends React.Component {
    
    showMsg = () => 'Hello World'
 
  render() {
    return (
      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "91vh"
      }}>
        <Terminal
          color='green'
          backgroundColor='#1e2227'
          barColor='black'
          style={{ fontWeight: "bold", fontSize: "1em" ,
            "box-shadow": "0 4px 8px 0 rgba(0, 0, 0, 0.6), 0 6px 20px 0 rgba(0, 0, 0, 0.6)","overflow-x": "hidden", "overflow-y": "hidden"}}
          commands={{
            'open-google': () => window.open('https://www.google.com/', '_blank'),
            showmsg: this.showMsg,
            popup: () => alert('Terminal in React')
          }}
          descriptions={{
            'open-google': 'opens google.com',
            showmsg: 'shows a message',
            alert: 'alert', popup: 'alert'
          }}
          msg='You can write anything here. Example - Hello! My name is Foo and I like Bar.'
        />
      </div>
    );
  }
}