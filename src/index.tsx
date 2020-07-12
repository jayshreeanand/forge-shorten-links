import ForgeUI, {
  render,
  useConfig,
  Fragment,
  Text,
  TextField,
  ConfigForm,
  Macro,
  Image,
  useAction,
} from "@forge/ui";

import bitlyGenerate from "./util";

const defaultConfig = {
  longUrl: "https://github.com/tanepiper/node-bitly",
};

const Config = () => {
  return (
    <ConfigForm>
      <TextField
        label="Input URL"
        name="longUrl"
        defaultValue="https://github.com/tanepiper/node-bitly"
      />
    </ConfigForm>
  );
};

const App = () => {
  const { longUrl } = useConfig();
  const shortUrl = bitlyGenerate(longUrl);
  // const shortUrl = useAction(
  //   (value) => value,
  //   () => bitlyGenerate(longUrl)
  // );
  return (
    <Fragment>
      <Text>Hello world!</Text>
      <Fragment>
        <Text>{shortUrl}</Text>
      </Fragment>
    </Fragment>
  );
};

export const run = render(
  <Macro app={<App />} config={<Config />} defaultConfig={defaultConfig} />
);
