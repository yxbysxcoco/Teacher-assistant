import { Component, Vue } from "vue-property-decorator";

interface UserInfo {
  userName: string;
  password: string;
}

@Component({
  name: "Login",
})
export default class Login extends Vue {
  public userInfo: UserInfo = {
    userName: "",
    password: ""
  };

  public handleSubmit() {
    this.userInfo = {
      userName: "",
      password: ""
    };
  }

  protected render() {
    return (
      <div>
        <input placeholder="请输入账号" v-model={this.userInfo.userName} />
        <input placeholder="请输入密码" v-model={this.userInfo.password} />
        <button on-click={this.handleSubmit}>按钮</button>
      </div>
    );
  }
}
