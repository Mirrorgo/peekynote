import {
  Autocomplete,
  Button,
  Card,
  Divider,
  Input,
  Link,
} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { useEffect, useState } from "react";
import { mockBingSearchResult } from "../../helper/bingSearch";

type ListItem = {
  id: string;
  name: string;
  url: string;
  isFamilyFriendly: boolean;
  displayUrl: string;
  snipeet: string;
  deepLinks: {
    name: string;
    url: string;
    snippet: string;
  }[];
  dateLastCrawled: string;
  language: string;
  isNavigational: boolean;
  thumbnailUrl?: string;
};

function App() {
  console.log(mockBingSearchResult.webPages.value);
  const [list, setList] = useState<any[]>(mockBingSearchResult.webPages.value);
  return (
    <div>
      <Card>
        <Input />
        <Button>搜索</Button>
      </Card>
      <Grid2 container spacing={2}>
        {list.map((item) => {
          console.log(item, "item");
          if (item.displayUrl !== item.url)
            console.log("!", item.displayUrl, item.url);
          return (
            <Grid2 key={item.id}>
              <Card>
                <Link href={item.url} target="_blank">
                  {item.name}
                </Link>
                <div>{item.displayUrl}</div>
                <Divider />
                <div>{item.snippet}</div>
              </Card>
            </Grid2>
          );
        })}
      </Grid2>
    </div>
  );
}

export default App;
