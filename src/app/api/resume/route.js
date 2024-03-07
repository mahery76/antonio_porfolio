import { NextResponse, NextRequest } from 'next/server'
import fs from 'fs'

export async function GET(request) {
    try {
        console.log('hello world')
        const filePath = "../../../../public/Documents/Resume.pdf"
        const pdfData = await fs.promises.readFile(filePath)
        
        NextResponse.setHeader('Content-Type', 'application/pdf');
        NextResponse.setHeader('Content-Disposition', 'attachment; filename=Resume.pdf');
    
        return NextResponse.send(pdfData);
    } catch (err) {
        console.log(err)
        return NextResponse.status(500).send('error downloading the PDF')
    }
}

