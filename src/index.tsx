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

import { shortenUrl } from "./util";

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
  var shortUrl = shortenUrl(longUrl);
  // (async () => {
  //   shortUrl = await bitlyGenerate(longUrl);
  // })();
  // const shortUrl = bitlyGenerate(longUrl);
  return (
    <Fragment>
      <Text>Hello world!</Text>
      <Fragment>
        <Text
          content={async (): string => {
            return await shortenUrl(longUrl);
          }}
        />
      </Fragment>
    </Fragment>
  );
};

export const run = render(
  <Macro app={<App />} config={<Config />} defaultConfig={defaultConfig} />
);
