unless Slide.any?
	Slide.create(question:'How are you dick?', description:'Dick - penis');
	Slide.create(question:'How are you Nigga?', description:'Nigga - nigger');
	Slide.create(question:'How are you alchoholic?', description:'Fuck you!');
end

unless Test.any?
	test = Test.create(title:'Awesome test')
	test.slides << Slide.all
end
