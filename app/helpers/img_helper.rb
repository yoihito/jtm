module ImgHelper extend ApplicationHelper
  include ActionView::Helpers::TagHelper

  #
  # img( ['header', 'logo.png'] )
  # => <img src="/assets/blocks/header/images/logo.png" alt="Logo">
  #
  # img( 'logo.png' )
  # => <img src="/assets/global/images/logo.png" alt="Logo">
  #
  # img( '../_form/header.png' )
  # => <img src="/assets/global/_form/images/logo.png" alt="Logo">
  #
  def img(source=[], options={})
    options = options.symbolize_keys

    if source.is_a?(Array)
      src = 'blocks/' + source[0] + '/images/' + source[1]
    else
      src = 'global/images/' + source
    end

    src = src2path('/assets/' + src)

    options[:src] = src

    unless src =~ /^(?:cid|data):/ || src.blank?
      options[:alt] = options.fetch(:alt){ image_alt(src) }
    end

    options[:width], options[:height] = extract_dimensions(options.delete(:size)) if options[:size]
    tag("img", options)
  end

  def src2path(src)
    src = src.split('/')

    while src.include?('..')
      index = src.index('..')

      if index == 0
        break
      else
        src.delete_at(index)
        src.delete_at(index - 1)
      end

    end

    src.join('/')
  end

end
