import { Button } from "@/components/ui/button";
import MaxWidthWrapper from "@/components/ui/MaxWidthWrapper";
import NewsCard from "@/components/ui/news-card";
import { INews } from "@/lib/types";

type Props = {
  title: string;
  newsData: INews[];
};

const NewsSection = ({ title, newsData }: Props) => {
  return (
    <MaxWidthWrapper className="w-full py-10 flex flex-col space-y-4">
      <div>
        <Button className="text-secondary text-xs bg-white md:text-sm border border-secondary md:px-7 hover:bg-secondary hover:text-white rounded-full">
          {title}
        </Button>
      </div>

      <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5">
        {newsData.map((data, key) => (
          <NewsCard key={key} newsItem={data} />
        ))}
      </div>
    </MaxWidthWrapper>
  );
};

export default NewsSection;
