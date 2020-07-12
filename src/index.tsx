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
  longUrl: "",
};

const Config = () => {
  return (
    <ConfigForm>
      <TextField label="Input URL" name="longUrl" defaultValue="" />
    </ConfigForm>
  );
};

const App = () => {
  const { longUrl } = useConfig();
  const [shortUrl] = useAction(
    async () => await shortenUrl(longUrl),
    async () => await shortenUrl(longUrl)
  );

  return (
    <Fragment>
      {longUrl == "" && <Text>Add/Edit URL in macro settings</Text>}
      <Text content={shortUrl} />
    </Fragment>
  );
};

export const run = render(
  <Macro app={<App />} config={<Config />} defaultConfig={defaultConfig} />
);
