import ForgeUI, {
  render,
  useConfig,
  Fragment,
  Text,
  TextField,
  Select,
  Option,
  ConfigForm,
  Macro,
  Image,
} from "@forge/ui";

import { generateShortenedUrl } from "./util";

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
  // const daysLeft = daysTill(time);
  const shortUrl = generateShortenedUrl(longUrl);
  return (
    <Fragment>
      <Text>Hello world!</Text>
      <Fragment>
        <a href={shortUrl}>{shortUrl}</a>
      </Fragment>
    </Fragment>
  );
};

export const run = render(
  <Macro app={<App />} config={<Config />} defaultConfig={defaultConfig} />
);
