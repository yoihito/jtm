unless Publisher.any?
	5.times {
		Publisher.create(title: Faker::Name.name, description: Faker::Lorem.paragraph)
	}
end


unless Slide.any?
	5.times {
		Slide.create(question: Faker::Lorem.sentence, description: Faker::Lorem.paragraph);
	}
end

unless Test.any?
	10.times {
		publisher = Publisher.order("RANDOM()").take
		test = Test.create(title: Faker::Lorem.sentence, author: publisher)
		test.slides << Slide.order("RANDOM()").limit(3)
	}
end


