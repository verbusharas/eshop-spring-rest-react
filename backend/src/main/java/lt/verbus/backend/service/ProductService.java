package lt.verbus.backend.service;

import lt.verbus.backend.controller.dto.ProductDTO;
import lt.verbus.backend.entity.Product;
import lt.verbus.backend.repository.ProductRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

@Service
public class ProductService {

    ProductRepository productRepository;

    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public ProductDTO getProductById(Long id) {
        Product product = productRepository.getOne(id);
        ProductDTO productDTO = new ProductDTO();
        BeanUtils.copyProperties(product, productDTO);
        return productDTO;
    }

    public ProductDTO createProduct(ProductDTO productDTO) {
        Product product = new Product();
        BeanUtils.copyProperties(productDTO, product);
        Product savedProduct = productRepository.save(product);
        productDTO.setId(savedProduct.getId());
        return productDTO;
    }

    public ProductDTO updateProduct(ProductDTO productDTO) {
        if (productDTO.getId() == null) {
            // throw bad request exception
        }
        Product product = productRepository.getOne(productDTO.getId());
        BeanUtils.copyProperties(productDTO, product);
        productRepository.save(product);
        return productDTO;
    }

    public void deleteProduct(Long id) {
        productRepository.deleteById(id);
    }
}
