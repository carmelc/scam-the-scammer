import {NextRequest, NextResponse} from "next/server";

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const name = formData.get('name') as string | null;
  const pin = formData.get('pin') as string | null;

  if(!name?.toUpperCase().includes('GARY') || !name?.toUpperCase().includes('SUQUINAGUA') || pin !== '919012') {
    return NextResponse.json({ reason: 'details-no-match' }, { status: 400 });
  }

  const imageFile = formData.get('identification-card') as unknown as File | null;
  if (!imageFile) {
    return NextResponse.json(null, { status: 400 });
  }
  const imageBuffer = Buffer.from(await imageFile.arrayBuffer()).toString('base64');

  console.log('Image uploaded:', imageFile.name, imageBuffer.length, 'bytes');
  const body = {
    filename: imageFile.name,
    customerName: name,
    fileContent: imageBuffer,
  };

  await fetch('https://carmelc6.wixsite.com/scammer-info/_functions/upload', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  });

  return new Response(JSON.stringify({ reason: 'success' }), {
    status: 200,
  });
}
