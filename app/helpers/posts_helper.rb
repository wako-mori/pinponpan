module PostsHelper

  def preparation
    require "readline"

    qa = [ 
      "take a risk.",
      "easier said than done.",
      "more haste, less speed.",
      "there is always something better.",
      "good morning.",
    ]
    score = 0 

    qa.shuffle!
    qa.each_with_index do |text, i|
      puts text

  end

end
end
