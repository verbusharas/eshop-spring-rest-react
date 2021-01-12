package lt.verbus.backend.service;

import lt.verbus.backend.controller.dto.ProductDTO;
import lt.verbus.backend.entity.Product;
import lt.verbus.backend.repository.ProductRepository;
import lt.verbus.backend.service.exception.EntityNotFoundException;
import lt.verbus.backend.entity.mapper.ProductMapper;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ProductService {

    private final ProductRepository productRepository;
    private final ProductMapper productMapper;

    public ProductService(ProductRepository productRepository, ProductMapper productMapper) {
        this.productRepository = productRepository;
        this.productMapper = productMapper;
    }

    public ProductDTO createProduct(ProductDTO productDTO) {
        Product product = productMapper.convertProductDTOToEntity(productDTO);
        Product savedProduct = productRepository.save(product);
        productDTO.setId(savedProduct.getId());
        return productDTO;
    }

    public ProductDTO updateProduct(ProductDTO productDTO) {
        Long id = productDTO.getId();
        if (productDTO.getId() == null) {
            throw new EntityNotFoundException(id);
        }
        Product product = getById(id);
        BeanUtils.copyProperties(productDTO, product);
        productRepository.save(product);
        return productDTO;
    }

    public ProductDTO getProductById(Long id) {
        Product product = getById(id);
        return productMapper.convertProductToDTO(product);
    }

    public void deleteProduct(Long id) {
        if (!productRepository.existsById(id)) {
            throw new EntityNotFoundException(id);
        }
        productRepository.deleteById(id);
    }

    public List<ProductDTO> getAllProducts() {
        return productRepository.findAll().stream()
                .map(productMapper::convertProductToDTO)
                .collect(Collectors.toList());
    }

    private Product getById(Long id) {
        return productRepository.findById(id)
                .orElseThrow(()->new EntityNotFoundException(id));
    }

}
