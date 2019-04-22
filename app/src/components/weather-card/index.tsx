import { Component, Prop, Watch, Emit, Vue } from "vue-property-decorator";

interface Item {
  text: string;
  complete: boolean;
}

@Component({
  name: "WeatherCard",
})
export default class WeatherCard extends Vue {
  @Prop(Object) public item!: Item;

  public edittingContent = '';

  @Emit("on-complete")
  public complete() {
    return;
  }

  protected render() {
    return (
      <li>this is a weather card</li>
    );
  }
}
