module Jekyll::PunctuationFilter
  def correct_punctuation(string)
    space = '&#8239;'
    signs = [';', ':', '!', '?']
    signs.each do |sign|
      string.gsub! " #{sign}", "#{space}#{sign}"
    end
    string
  end
end

Liquid::Template.register_filter(Jekyll::PunctuationFilter)
