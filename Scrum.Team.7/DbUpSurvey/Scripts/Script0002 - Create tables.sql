insert into survey(SurveyTitle, SurveyStartDate, SurveyEndDate, SurveyCreatorID, SurveyStartSummary, SurveyEndSummary)
values ('MMMMM Guiness', GETDATE(), GetDate() + 10, 1, 'Welcome to the guiness survey','Thank you for filling out this survey')

insert into QuestionType(QuestionCode, QuestionTypeDesc)
values('radio', 'Radio button list');

insert into QuestionType(QuestionCode, QuestionTypeDesc)
values('ddl', 'drop down selection list');

insert into QuestionType(QuestionCode, QuestionTypeDesc)
values('freetext', 'free text');

insert into QuestionType(QuestionTypeDesc)
values('Radio');

insert into question(SurveyID, QuestionText, PageID, QuestionType)
values (1,'Do you like Guiness',1,1);