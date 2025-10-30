export async function GET() {
    return Response.json({ 
        message: "About API endpoint",
        description: "This is the about page API"
    });
}