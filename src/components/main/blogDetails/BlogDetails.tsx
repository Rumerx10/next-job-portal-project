import Image from "next/image";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import Link from 'next/link';


const BlogDetails = () => {
  return (
    <div className="pt-20 lg:pt-24">
      <div className="w-full flex flex-col items-center justify-center py-10 lg:py-20">
        
        <div className="w-full flex flex-col items-center justify-center gap-10">
          <h1 className="w-full text-4xl font-bold text-center max-w-4xl">
            Attract Sales And Profits toward the sunshine - and shadows will fall behind you.
          </h1>
          <div className="flex gap-3 items-center">
            <div className="flex gap-3 items-center">
              <div className="flex object-cover rounded-full overflow-hidden w-12 h-12">
                <Image src="/findJob.webp" height={80} width={80} alt="author" />
              </div>
              <p className="text-gray-500">Alison Dawn</p>
            </div>
            <div className="h-1.5 w-1.5 rounded-full bg-gray-500"></div>
            <p className="text-gray-500">Jun 02, 2025</p>
            <div className="h-1.5 w-1.5 rounded-full bg-gray-500"></div>
            <p className="text-gray-500">12 Comment</p>
          </div>
          <div className="flex object-cover w-full max-h-[600px]">
            <Image
              src="/newsArticle/attract.webp"
              alt="cover photo"
              height={600}
              width={1980}
            />
          </div>
        </div>
        <div className="max-w-7xl px-4 mx-auto w-full flex flex-col gap-5 mt-10">
          <div>
            <h1 className="text-3xl font-semibold mb-5">Course Description</h1>
            <p>
              Aliquam hendrerit sollicitudin purus, quis rutrum mi accumsan nec. Quisque bibendum orci ac nibh facilisis, at malesuada orci congue. Nullam tempus sollicitudin cursus. Ut et adipiscing erat. Curabitur this is a text link libero tempus congue.Duis mattis laoreet neque, et ornare neque sollicitudin at. Proin sagittis dolor sed mi elementum pretium. Donec et justo ante. Vivamus egestas sodales est, eu rhoncus urna semper eu. Come sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer tristique elit lobortis purus bibendum, quis dictum metus mattis. Phasellus posuere felis sed eros porttitor mattis. Curabitur massa magna, tempor in blandit id, porta in ligula. Aliquam laoreet nisl massa, at interdum mauris sollicitudin et.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row gap-3 justify-between border-y-2 py-5 lg:py-10">
            <div>
              <Link href="#" className="flex items-center gap-2 text-primaryBlue font-medium">
                <IoIosArrowBack />
                <p>Previous Post</p>
              </Link>
              <p className="text-sm font-medium">Given Set was without from god divide rule Hath</p>
            </div>
            <div className="flex flex-col">
              <Link href="#" className="flex items-center lg:justify-end gap-2 text-primaryBlue font-medium">
                <p>Next Post</p>
                <IoIosArrowForward />
              </Link>
              <p className="text-sm font-medium"> Tree earth fowl given moveth deep lesser After</p>
            </div>
          </div>

          <div className="flex flex-col items-start gap-3 max-w-7xl">
            <h1 className="text-3xl font-semibold">Comments</h1>
        <div className="flex items-start gap-3">
              <div className="flex-shrink-0">
                <Image
                  className="h-12 w-12 rounded-full object-cover"
                  src="/newsArticle/attract.webp"
                  alt="User Avatar"
                  width={80}
                  height={80}
                />
              </div>
              <div className="flex-1">
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                    Oscar Cafeo
                  </h3>                
                  <p className="text-gray-700 mt-2 text-sm sm:text-base leading-relaxed">
                    Beautiful courses.
                    Far much that one rank beheld bluebird after outside ignobly allegedly
                    more when oh arrogantly vehement tantaneously eel valiantly petted this
                    along across highhandedly much.
                  </p>
                </div>              
              </div>
            </div>



          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
