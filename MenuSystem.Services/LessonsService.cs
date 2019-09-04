using System.Collections.Generic;

public class LessonsService : ILessons
{
    public IList<Lesson> GetLessons()
    {
        return new List<Lesson>() {
            new Lesson{
                LessonName = "Angular",
                Tutor = "Williamsen",
                Duration = "1 year"
            },
            new Lesson{
                LessonName = "Dot net core",
                Tutor = "Ven dillon",
                Duration = "2 year"
            },
            new Lesson{
                LessonName = "SQL Server",
                Tutor = "Kudvenkat",
                Duration = "1.5 year"
            }
        };
    }
}