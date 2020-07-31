import { Component } from '@angular/core';

@Component({
  selector: "my-app",
  templateUrl: `./app.component.html`
})
export class AppComponent {
  user = {
    mail: '',
    passwd: '',
    name: '',
  };
  idtype = 'mail';
  data = [
    { label: 'メールアドレス', value: 'mail' },
    { label: 'ID', value: 'id' }
  ];
  roll = '0';
  data2 = [
    { label: '日本語', value: '0'},
    { label: '英語', value: '1'},
    { label: '中国語', value: '2'}
  ];
  data3 = [
    { label: 'パスワードを保存', value: 'checkbox', selected: false }
  ];
  
  show() {
    if(this.data3[0].selected==true){
      alert('ログインID：' + this.user.mail + '\n'
      + 'IDの種類：' + this.idtype + '\n'
      + 'パスワード：' + this.user.passwd + '\n'
      + '言語：' + this.roll + '\n'
      + 'パスワードを保存：保存する\n'
      );
    }else{
      alert('ログインID：' + this.user.mail + '\n'
      + 'IDの種類：' + this.idtype + '\n'
      + 'パスワード：' + this.user.passwd + '\n'
      + '言語：' + this.roll + '\n'
      + 'パスワードを保存：保存しない\n'
      );
    }
  }
}