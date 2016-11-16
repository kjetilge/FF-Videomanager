import React from 'react';
import TopButton from './topButton'

const styles = {
  topBar: {
    height: 37,
    WebkitAppRegion: 'drag',
    paddingTop:6,
    //display: 'flex',
    //alignItems: 'center',
    background: 'linear-gradient(to top , rgb(45,45,45), rgb(55,55,55))'
  },
  tools: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: 78,
    width: 83,
  }

}
//'linear-gradient(90deg, rgb(10,10,10,), rgb(52,52,52))',
export default function topBar () {
  return (
    <div style={styles.topBar} >
      <div style={styles.tools}>
        <TopButton font="ion-ios-arrow-thin-down" active={false} size={1.5}/>
        <TopButton font="flaticon-success" active={true} size={1}/>
      </div>
    </div>
  )
}

//ion-ios-arrow-thin-down
/*
.flaticon-chat-1:before { content: "\f106"; }
.flaticon-chat-2:before { content: "\f107"; }
.flaticon-copy:before { content: "\f108"; }
.flaticon-dislike:before { content: "\f109"; }
.flaticon-download:before { content: "\f10a"; }
.flaticon-download-1:before { content: "\f10b"; }
.flaticon-edit:before { content: "\f10c"; }
*/

//<img src="../assets/svg/avatar.svg" alt="Kiwi standing on oval" width="20" style={style}/>
