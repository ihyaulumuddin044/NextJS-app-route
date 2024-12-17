import { NextRequest, NextResponse } from "next/server";

const data = [
  {
    id: 1,
    name: "sepatu baru",
    price: 100000,
  },
  {
    id: 2,
    name: "sepatu anak",
    price: 100000,
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
