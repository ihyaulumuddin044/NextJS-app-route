import { NextRequest, NextResponse } from "next/server";

const data = [
  {
    id: 1,
    title: "sepatu baru",
    price: 100000,
    image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/99fd5856-b6ac-47c9-8cf0-99192fe4b844/NIKE+C1TY.png"
  },
  {
    id: 2,
    title: "sepatu anak",
    price: 100000,
    image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/99fd5856-b6ac-47c9-8cf0-99192fe4b844/NIKE+C1TY.png"
  },
];
export async function GET(request: NextRequest) {
  // console.log( request)
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  console.log(id);
  if (id) {
    const DetailProduct = data.find((item) => item.id === Number(id));
    if(DetailProduct){
        return NextResponse.json({
            status: 200,
            message: "success",
            data: DetailProduct,
          });
    }
    return NextResponse.json({
        status: 404,
        message: "not found",
        data: {},
      });
  }
  return NextResponse.json({ status: 200, message: "success", data: data });
}
