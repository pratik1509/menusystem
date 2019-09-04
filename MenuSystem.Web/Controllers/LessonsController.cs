using Microsoft.AspNetCore.Mvc;

[Route("api/[controller]")]
public class LessonsController : Controller
{
    private readonly ILessons _lessonService;
    public LessonsController(ILessons lessonService)
    {
        _lessonService = lessonService;
    }

    [Route("[action]")]
    public ActionResult Get()
    {
        return Ok(_lessonService.GetLessons());
    }
}