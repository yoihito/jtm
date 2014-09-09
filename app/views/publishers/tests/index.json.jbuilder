json.array!(@publishers_tests) do |publishers_test|
  json.extract! publishers_test, :id
  json.url publishers_test_url(publishers_test, format: :json)
end
